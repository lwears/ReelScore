import fp from 'fastify-plugin'
import { Authenticator } from '@fastify/passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as GithubStrategy } from 'passport-github2'

import { userService } from '../users/users.service'
import { mapProviderUser } from '@api/lib/utils'

import type {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify'
import type { User } from '@api/drizzle/schema'
import type { Profile, VerifyCallback } from 'passport-google-oauth20'
import { env } from '@api/configs/env.config'

const authPlugin: FastifyPluginCallback = (
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
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${env.HOST}/auth/google/callback`,
      },
      async (_token, _tokenSecret, profile, done) => {
        return userService
          .findOrCreate(profile.id, mapProviderUser(profile))
          .then((user) => done(null, user))
          .catch((error) => done(error))
      }
    )
  )

  fastifyPassport.use(
    'github',
    new GithubStrategy(
      {
        clientID: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
        callbackURL: `${env.HOST}/auth/github/callback`,
        scope: ['user:email'],
      },
      async (
        _token: string,
        _tokenSecret: string,
        profile: Profile,
        done: VerifyCallback
      ) => {
        return userService
          .findOrCreate(profile.id, mapProviderUser(profile))
          .then((user) => done(null, user))
          .catch((error) => done(error))
      }
    )
  )

  fastifyPassport.registerUserSerializer(async (user: User) => user.id)

  fastifyPassport.registerUserDeserializer<string, User | null>(
    async (id: string) => userService.get(id)
  )

  fastify.get(
    '/auth/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        failureRedirect: `${env.CLIENT_URL}/login`,
      }),
    },
    async (_req, res) => {
      return res.redirect(`${env.CLIENT_URL}/movies`)
    }
  )

  fastify.get(
    '/auth/github/callback',
    {
      preValidation: fastifyPassport.authenticate('github', {
        failureRedirect: `${env.CLIENT_URL}/login`,
      }),
    },
    async (_req, res) => {
      return res.redirect(`${env.CLIENT_URL}/movies`)
    }
  )

  fastify.get(
    '/auth/google/login',
    fastifyPassport.authenticate('google', { scope: ['profile', 'email'] })
  )

  fastify.get(
    '/auth/github/login',
    fastifyPassport.authenticate('github', { scope: ['user:email'] })
  )

  fastify.get('/auth/logout', async (req, res) => {
    try {
      await new Promise<void>((resolve, reject) => {
        req.session.destroy((err) => {
          if (err) reject(err)
          else resolve()
        })
      })

      res.clearCookie('session')
      res.redirect(`${env.CLIENT_URL}/login`)
    } catch (error) {
      req.log.error({ error }, 'Failed to destroy session')
      res.status(500).send({
        error: 'Failed to logout. Please clear your browser cookies.',
      })
    }
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
