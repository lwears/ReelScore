import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { createContext } from './context'
import { appRouter } from './router'
import cors from '@fastify/cors'
import pretty from 'pino-pretty'
import pino from 'pino'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { openApiDocument } from './openapi'

export type ServerOptions = {
  dev?: boolean
  port?: number
  prefix?: string
  environment: 'development' | 'production' | 'test' | 'local'
}

export function createServer(opts: ServerOptions) {
  const port = opts.port ?? 3000
  const prefix = opts.prefix ?? '/trpc'

  const stream = pretty({
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
  })
  const prettyLogger = pino({ level: 'debug' }, stream)

  const server = fastify({
    logger:
      opts.environment === 'local' || opts.environment === 'test'
        ? prettyLogger
        : true,
  })

  server.register(cors, {
    origin: '*',
    methods: '*',
  })

  server.register(fastifyTRPCPlugin, {
    prefix,
    trpcOptions: { router: appRouter, createContext },
  })

  server.register(fastifyTRPCOpenApiPlugin, {
    basePath: '/api',
    router: appRouter,
    createContext,
  })

  // Server Swagger UI
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
