import type { FastifyBaseLogger } from 'fastify'
import fastify from 'fastify'
import { Authenticator } from '@fastify/passport'
import { fastifySession } from '@fastify/session'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import RedisStore from 'connect-redis'
import { fastifyCookie } from '@fastify/cookie'
// import cors from '@fastify/cors'
import { createContext } from './context'
import pretty from 'pino-pretty'
import pino from 'pino'
import { fastifyTRPCOpenApiPlugin } from 'trpc-openapi'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Redis } from 'ioredis'

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
  const client = new Redis({ host: 'localhost', port: 6379, enableAutoPipelining: true })
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

  const fastifyPassport = new Authenticator()

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
    prefix: 'session:',
    saveUninitialized: false,
    rolling: false,
  })

  server.register(fastifyPassport.initialize())
  server.register(fastifyPassport.secureSession())
  server.addHook('preHandler', (request, reply, next) => {
    request.session.touch()
    request.session.user = { ...request.user }
    // @ts-expect-error
    //request.session.user = { name: 'max' }
    //request.session.user = { name: 'max' }
    next()
  })

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

  server.get('/', async (req, reply) => {
    console.log(req.session)
    //reply.send(req.cookies.sessionId)
    return `👋 Hello ${JSON.stringify(req.session.user)} 👋`
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

  server.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err)
      }
      res.redirect('http://localhost:3000')
    })
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
