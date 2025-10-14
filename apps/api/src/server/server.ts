import fastify from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import session from '@fastify/session'
import cookie from '@fastify/cookie'
import RedisStore from 'connect-redis'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { Redis } from 'ioredis'

import { createContext } from './context'
import { appRouter } from './router'
import { handleDatabaseError } from '@api/lib/utils'
import authPlugin from '@api/modules/auth/auth.plugin'

import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import type { TRPCError } from '@trpc/server'
import type { ServerConfig } from '@api/configs/server.config'

export function createServer(config: ServerConfig) {
  const client = new Redis({
    host: config.redisHost,
    port: config.redisPort,
    password: config.redisPassword,
    tls: config.redisTls ? {} : undefined,
    enableAutoPipelining: true,
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
      const delay = Math.min(times * 50, 2000)
      return delay
    },
    reconnectOnError(err) {
      const targetError = 'READONLY'
      if (err.message.includes(targetError)) {
        return true
      }
      return false
    },
  })
  const server = fastify({
    logger: ['local', 'test'].includes(config.environment)
      ? {
          level: 'debug',
          transport: {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'HH:MM:ss Z',
              ignore: 'pid,hostname',
            },
          },
        }
      : true,
  }).withTypeProvider<ZodTypeProvider>()

  server.setValidatorCompiler(validatorCompiler)
  server.setSerializerCompiler(serializerCompiler)

  client.on('error', (err) => {
    server.log.error({ err, service: 'redis' }, 'Could not establish a connection with Redis')
  })
  client.on('connect', () => {
    server.log.info({ service: 'redis' }, 'Connected to Redis successfully')
  })

  // Security headers with Helmet
  server.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
    crossOriginEmbedderPolicy: config.environment === 'production',
    crossOriginOpenerPolicy: config.environment === 'production',
    crossOriginResourcePolicy: config.environment === 'production',
  })

  server.register(cookie, {})

  server.register(session, {
    secret: config.secret,
    cookieName: 'session',
    cookie: {
      path: '/',
      secure: config.environment === 'production', // HTTPS only in production
      httpOnly: true, // Prevents XSS attacks
      sameSite: 'lax', // CSRF protection
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
    store: new RedisStore({
      client: client,
      prefix: 'session:',
      ttl: 60 * 60 * 24 * 7, // 7 days in seconds
    }),
    saveUninitialized: false,
    rolling: true, // Extend session on activity
  })

  server.register(cors, {
    origin: (origin, cb) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) {
        cb(null, true)
        return
      }

      const allowedOrigins = [
        config.clientUrl,
        'http://localhost:3000', // Local development
        'http://localhost:3001', // Alternative local port
      ]

      if (allowedOrigins.some(allowed => origin.startsWith(allowed))) {
        cb(null, true)
      } else {
        config.environment === 'local'
          ? cb(null, true) // Allow all in local dev
          : cb(new Error('Not allowed by CORS'), false)
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    maxAge: 86400, // Cache preflight for 24 hours
  })

  // Rate limiting with Redis store
  server.register(rateLimit, {
    max: config.environment === 'local' ? 1000 : 100, // Higher limit in local dev
    timeWindow: '1 minute',
    redis: client,
    nameSpace: 'rate-limit:',
    skipOnError: true, // Don't block on Redis errors
    keyGenerator: (req) => {
      // Use user ID if authenticated, otherwise use IP
      return req.user?.id || req.ip
    },
  })

  server.register(authPlugin)

  server.register(fastifyTRPCPlugin, {
    prefix: config.trpcPrefix,
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ error }: { error: TRPCError }) {
        // Handle database errors from Drizzle/PostgreSQL
        if (error.cause && typeof error.cause === 'object' && 'code' in error.cause) {
          try {
            handleDatabaseError(error.cause)
          } catch (dbError) {
            return dbError as TRPCError
          }
        }
        return error
      },
    },
  })

  server.register(swagger, {
    openapi: {
      info: {
        title: 'ReelScore API',
        description: 'Movie and TV series tracking API',
        version: '1.0.0',
      },
      servers: [
        {
          url: config.host,
          description: 'Development server',
        },
      ],
    },
  })

  server.register(swaggerUi, {
    routePrefix: '/docs',
  })

  const stop = () => server.close()
  const start = async () => {
    try {
      await server.listen({ port: config.port })
    } catch (error) {
      server.log.error(error)
    }
  }

  return { server, start, stop }
}
