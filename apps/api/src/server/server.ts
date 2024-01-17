import fastify from 'fastify'
import { fastifySession } from '@fastify/session'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import RedisStore from 'connect-redis'
import { fastifyCookie } from '@fastify/cookie'
import cors from '@fastify/cors'
import { createContext } from './context'
import pretty from 'pino-pretty'
import pino from 'pino'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import { Redis } from 'ioredis'

import { appRouter } from './router'
import { openApiDocument } from './openapi'
import type { ServerConfig } from '@api/configs/env.config'

import authPlugin from '@api/modules/auth/auth.plugin'
import testPlugin from '@api/modules/test/test.plugin'
import { type User } from '@prisma/client'

declare module 'fastify' {
  interface PassportUser extends User {}
}

export function createServer({
  port,
  environment,
  trpcPrefix,
  googleClientId,
  googleClientSecret,
}: ServerConfig) {
  const client = new Redis({
    host: 'localhost',
    port: 6379,
    enableAutoPipelining: true,
  })
  // const stream = pretty({
  //   colorize: true,
  //   translateTime: 'HH:MM:ss Z',
  //   ignore: 'pid,hostname',
  // })
  // const prettyLogger = pino({ level: 'debug' }, stream)

  const server = fastify({
    // logger: ['local', 'test'].includes(environment) ? (prettyLogger as FastifyBaseLogger) : true,
    logger: false,
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
    secret: 'cNaoPYAwF60HZJzkcNaoPYAwF60HZJzk',
    cookieName: 'session',
    cookie: { path: '/', secure: false },
    store: new RedisStore({
      client: client,
      prefix: 'session:',
    }),
    //prefix: 'session:',
    saveUninitialized: false,
    rolling: false,
  })

  server.register(cors, {
    origin: true,
    methods: '*',
    credentials: true,
  })

  server.register(authPlugin, { googleClientId, googleClientSecret })

  server.register(testPlugin, {})

  server.register(fastifyTRPCPlugin, {
    prefix: trpcPrefix,
    trpcOptions: {
      router: appRouter,
      createContext,
      // onError({ path, error }) {
      //   // report to error monitoring
      //   console.error(`Error in tRPC handler on path '${path}':`, error)
      // },
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
      await server.listen({ port })
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }

  return { server, start, stop }
}
