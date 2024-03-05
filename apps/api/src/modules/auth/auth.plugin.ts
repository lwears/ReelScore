import fp from 'fastify-plugin'
import { Authenticator } from '@fastify/passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import { userService } from '../users/users.service'

import type {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify'
import type { Prisma, User } from '@prisma/client'
import type { Profile } from 'passport-google-oauth20'

interface Options {
  googleClientId: string
  googleClientSecret: string
}

const authPlugin: FastifyPluginCallback<Options> = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  next: (err?: Error) => void
) => {
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
        const user: Prisma.UserCreateInput = {
          googleId: profile.id,
          email: (profile.emails?.length &&
            profile?.emails[0]?.value) as string,
          name: profile.displayName,
        }
        return userService
          .findOrCreate(user)
          .then((user) => done(null, user))
          .catch((error) => done(error))
      }
    )
  )

  fastifyPassport.registerUserDeserializer<string, User | null>(
    async (id: string) => userService.get(id)
  )

  fastifyPassport.registerUserSerializer(async (user: Profile) => user.id)

  fastify.get(
    '/auth/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        scope: ['profile'],
      }),
    },
    async (_req, res) => {
      return res.redirect('http://localhost:3000/library/movies/watchlist')
    }
  )

  fastify.get(
    '/auth/login',
    fastifyPassport.authenticate('google', { scope: ['profile', 'email'] })
  )

  fastify.get('/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err)
      }
      res.clearCookie('session')
      res.redirect('http://localhost:3000/login')
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
