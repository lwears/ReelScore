import fastify from 'fastify'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import session from '@fastify/session'
import cookie from '@fastify/cookie'
import pino from 'pino'
import pretty from 'pino-pretty'
import RedisStore from 'connect-redis'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { Redis } from 'ioredis'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import { Prisma } from '@prisma/client'

import { createContext } from './context'
import { openApiDocument } from './openapi'
import { appRouter } from './router'
import { prismaErrToTRPCError } from '@api/lib/utils'
import authPlugin from '@api/modules/auth/auth.plugin'

import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import type { TRPCError } from '@trpc/server'
import type { FastifyBaseLogger } from 'fastify'
import type { ServerConfig } from '@api/configs/server.config'

export function createServer(config: ServerConfig) {
  const client = new Redis({
    host: 'localhost',
    port: 6379,
    enableAutoPipelining: true,
  })
  const stream = pretty({
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
  })
  const prettyLogger = pino({ level: 'debug' }, stream)

  const server = fastify({
    logger: ['local', 'test'].includes(config.environment)
      ? (prettyLogger as FastifyBaseLogger)
      : true,
  }).withTypeProvider<ZodTypeProvider>()

  server.setValidatorCompiler(validatorCompiler)
  server.setSerializerCompiler(serializerCompiler)

  client.on('error', (err) => {
    console.log('Could not establish a connection with redis. ' + err)
  })
  client.on('connect', () => {
    console.log('Connected to redis successfully')
  })

  server.register(cookie, {})

  server.register(session, {
    secret: config.secret,
    cookieName: 'session',
    cookie: { path: '/', secure: false },
    store: new RedisStore({
      client: client,
      prefix: 'session:',
    }),
    saveUninitialized: false,
    rolling: false,
  })

  server.register(cors, {
    origin: true,
    methods: '*',
    credentials: true,
  })

  server.register(authPlugin)

  server.register(fastifyTRPCPlugin, {
    prefix: config.trpcPrefix,
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ error }: { error: TRPCError }) {
        if (
          error['cause'] instanceof Prisma.PrismaClientKnownRequestError // The .code property can be accessed in a type-safe manner
        ) {
          prismaErrToTRPCError(error['cause'].code, error['cause'].message)
        } else {
          return error
        }
      },
    },
  })

  // TODO: Not sure this package is maintained or functional with tRPC v11
  server.register(fastifyTRPCOpenApiPlugin, {
    basePath: '/trpc',
    router: appRouter,
    createContext,
  })

  server.register(swagger, {
    mode: 'static',
    specification: { document: openApiDocument },
    prefix: '/docs',
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
