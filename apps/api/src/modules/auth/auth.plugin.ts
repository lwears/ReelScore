import fp from 'fastify-plugin'
import { Authenticator } from '@fastify/passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as GithubStrategy } from 'passport-github2'

import { userService } from '../users/users.service'
import { serverConfig } from '@api/configs/env.config'
import { mapProviderUser } from '@api/lib/utils'

import type {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify'
import type { User } from '@prisma/client'
import type { Profile, VerifyCallback } from 'passport-google-oauth20'

interface Options {
  googleClientId: string
  googleClientSecret: string
  githubClientId: string
  githubClientSecret: string
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
        callbackURL: `${serverConfig.host}/auth/google/callback`,
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
        clientID: options.githubClientId,
        clientSecret: options.githubClientSecret,
        callbackURL: `${serverConfig.host}/auth/github/callback`,
        scope: ['read:user'],
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
      return res.redirect(`${serverConfig.clientUrl}/movies`)
    }
  )

  fastify.get(
    '/auth/github/callback',
    {
      preValidation: fastifyPassport.authenticate('github', {
        scope: ['user:email'],
      }),
    },
    async (_req, res) => {
      return res.redirect(`${serverConfig.clientUrl}/movies`)
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

  fastify.get('/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err)
      }
      res.clearCookie('session')
      res.redirect(`${serverConfig.clientUrl}/login`)
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
