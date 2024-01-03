import { Authenticator } from '@fastify/passport'
import type { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify'
import type { Profile } from 'passport-google-oauth20'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { PrismaClient } from '@prisma/client'
import fp from 'fastify-plugin'

const prisma = new PrismaClient()

interface Options {
  googleClientId: string
  googleClientSecret: string
}

const authPlugin: FastifyPluginCallback<Options> = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  next: (err?: Error) => void,
) => {
  // console.log('My plugin is loaded with options:', options)

  const fastifyPassport = new Authenticator()

  fastify.register(fastifyPassport.initialize())
  fastify.register(fastifyPassport.secureSession())

  fastifyPassport.use(
    'google',
    new GoogleStrategy(
      {
        clientID: options.googleClientId,
        clientSecret: options.googleClientSecret,
        callbackURL: 'http://localhost:4000/auth/google/callback',
      },
      async (_token, _tokenSecret, profile, done) => {
        return prisma.user
          .findUnique({ where: { googleId: profile.id } }) //
          .then((user) => {
            if (user) {
              done(null, user)
            } else {
              prisma.user
                .create({
                  data: {
                    googleId: profile.id,
                    email: (profile.emails?.length && profile?.emails[0]?.value) as string,
                    name: profile.displayName,
                  },
                })
                .then((user) => done(null, user))
                .catch((err) => done(err))
            }
          })
      },
    ),
  )

  fastifyPassport.registerUserDeserializer(async (id: string) =>
    prisma.user.findUnique({ where: { id } }),
  )

  fastifyPassport.registerUserSerializer(async (user: Profile) => user.id)

  fastify.get(
    '/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        scope: ['profile'],
      }),
    },
    async (_req, res) => {
      return res.redirect('/')
    },
  )

  fastify.get('/login', fastifyPassport.authenticate('google', { scope: ['profile', 'email'] }))

  fastify.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err)
      }
      res.clearCookie('session')
      res.redirect('http://localhost:3000')
    })
  })

  // Example: Add a custom decorator to the Fastify instance
  //   fastify.decorate('myDecorator', (param: string) => {
  //     return `Decorated: ${param}`
  //   })

  // Call the next function to indicate that the plugin has been successfully registered
  next()
}

// Define the plugin export
export default fp(authPlugin)
