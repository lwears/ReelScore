import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import RedisStore from 'connect-redis'
import pino from 'pino'
import pretty from 'pino-pretty'
import { fastifyCookie } from '@fastify/cookie'
import { fastifySession } from '@fastify/session'
import { fastifyEnv } from '@fastify/env'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { Redis } from 'ioredis'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import { Prisma, type User } from '@prisma/client'
import { createContext } from './context'
import { openApiDocument } from './openapi'
import { appRouter } from './router'
import { prismaErrToTRPCError } from '@api/lib/utils'
import authPlugin from '@api/modules/auth/auth.plugin'
import testPlugin from '@api/modules/test/test.plugin'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import type { TRPCError } from '@trpc/server'
import type { FastifyBaseLogger } from 'fastify'

import { envSchema } from '@api/configs/env.config'
import zodToJsonSchema from 'zod-to-json-schema'

export async function createServer() {
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
    logger: ['local', 'test'].includes(process.env.NODE_ENV)
      ? (prettyLogger as FastifyBaseLogger)
      : true,
  }).withTypeProvider<ZodTypeProvider>()

  server.setValidatorCompiler(validatorCompiler)
  server.setSerializerCompiler(serializerCompiler)

  await server.register(fastifyEnv, {
    dotenv: true,
    schema: zodToJsonSchema(envSchema),
  })

  client.on('error', (err) => {
    console.log('Could not establish a connection with redis. ' + err)
  })
  client.on('connect', () => {
    console.log('Connected to redis successfully')
  })

  // server.register(fastifySecureSession, {
  //   key: fs.readFileSync('key.bin'),
  //   cookie: { path: '/' },
  // })

  server.register(fastifyCookie, {})

  server.register(fastifySession, {
    secret: server.config.SECRET_KEY,
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

  server.register(testPlugin, {})

  server.register(fastifyTRPCPlugin, {
    prefix: server.config.TRPC_PREFIX,
    trpcOptions: {
      router: appRouter,
      createContext,
      onError({ error }: { error: TRPCError }) {
        // report to error monitoring
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

  server.register(fastifyTRPCOpenApiPlugin, {
    basePath: '/trpc',
    router: appRouter,
    createContext,
  })

  server.register(fastifySwagger, {
    mode: 'static',
    specification: { document: openApiDocument },
    prefix: '/docs',
  })

  server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })

  const stop = () => server.close()
  const start = async () => {
    try {
      await server.listen({ port: server.config.PORT })
    } catch (error) {
      server.log.error(error)
    }
  }

  return { server, start, stop }
}
