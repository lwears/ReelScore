import fs from 'fs'
import fastify from 'fastify'
import { Authenticator } from '@fastify/passport'
import { fastifySecureSession } from '@fastify/secure-session'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
// import cors from '@fastify/cors'
import { createContext } from './context'
import pretty from 'pino-pretty'
import pino from 'pino'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import { appRouter } from './router'
import { openApiDocument } from './openapi'
import type { ServerConfig } from '@api/configs/env.config'

export function createServer({
  port,
  environment,
  prefix,
  googleClientId,
  googleClientSecret,
}: ServerConfig) {
  const fastifyPassport = new Authenticator()
  const stream = pretty({
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
  })
  const prettyLogger = pino({ level: 'debug' }, stream)

  const server = fastify({
    logger: ['local', 'test'].includes(environment) ? prettyLogger : true,
  })

  server.register(fastifySecureSession, {
    key: fs.readFileSync('key.bin'),
    cookie: { path: '/' },
  })

  server.register(fastifyPassport.initialize())
  server.register(fastifyPassport.secureSession())

  fastifyPassport.use(
    'google',
    new GoogleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: 'http://localhost:4000/auth/google/callback',
      },
      (_token, _refresh, profile, cb) => {
        cb(undefined, profile)
      },
    ),
  )

  fastifyPassport.registerUserDeserializer(async (user) => {
    return user
  })

  fastifyPassport.registerUserSerializer(async (user) => {
    return user
  })

  server.get('/', async (req) => {
    return `👋 Hello ${JSON.stringify(req.user)} 👋`
  })

  server.get(
    '/auth/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        scope: ['profile'],
      }),
    },
    async (_req, res) => {
      res.redirect('/')
    },
  )

  server.get('/login', fastifyPassport.authenticate('google', { scope: ['profile'] }))

  // server.register(cors, {
  //   origin: '*',
  //   methods: '*',
  // })

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
