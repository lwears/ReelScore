import fp from 'fastify-plugin'
import { Authenticator } from '@fastify/passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as GithubStrategy } from 'passport-github2'
import { Strategy as LocalStrategy } from 'passport-local'

import { userService } from '../users/users.service'
import { mapProviderUser } from '@api/lib/utils'

import type {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify'
import type { User } from '@prisma/client'
import type { Profile, VerifyCallback } from 'passport-google-oauth20'

const authPlugin: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _options: FastifyPluginOptions,
  next: (err?: Error) => void
) => {
  const fastifyPassport = new Authenticator()

  fastify.register(fastifyPassport.initialize())
  fastify.register(fastifyPassport.secureSession())

  fastifyPassport.use(
    'local',
    new LocalStrategy(async (_username, _pwd, done) => {
      try {
        const user = await userService.findOrThrow({
          where: { id: '8855dd27-77d1-45ec-ad04-76fcd697f229' },
        })
        console.log(user)
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    })
  )

  fastifyPassport.use(
    'google',
    new GoogleStrategy(
      {
        clientID: fastify.config.GOOGLE_CLIENT_ID,
        clientSecret: fastify.config.GOOGLE_CLIENT_SECRET,
        callbackURL: `${fastify.config.HOST}/auth/google/callback`,
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
        clientID: fastify.config.GITHUB_CLIENT_ID,
        clientSecret: fastify.config.GITHUB_CLIENT_SECRET,
        callbackURL: `${fastify.config.HOST}/auth/github/callback`,
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
    async (id: string) => {
      const user = userService.get(id)
      console.log({ id })
      return user
    }
  )

  fastifyPassport.registerUserSerializer(async (user: Profile) => {
    console.log('deserial')
    console.log(user)
    return user.id
  })

  fastify.get(
    '/auth/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        scope: ['profile'],
      }),
    },
    async (_req, res) => {
      return res.redirect(`${fastify.config.CLIENT_URL}/movies`)
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
      return res.redirect(`${fastify.config.CLIENT_URL}/movies`)
    }
  )

  // fastify.post(
  //   '/login123',
  //   fastifyPassport.authenticate('local', {
  //     successRedirect: `${fastify.config.CLIENT_URL}/movies`,

  //   })
  // )

  fastify.get(
    '/auth/google/login',
    fastifyPassport.authenticate('google', { scope: ['profile', 'email'] })
  )

  fastify.get(
    '/auth/github/login',
    fastifyPassport.authenticate('github', { scope: ['user:email'] })
  )

  fastify.post(
    '/login123',
    fastifyPassport.authenticate('local', {
      successRedirect: `${fastify.config.CLIENT_URL}/movies`,
      authInfo: true,
      //  failureRedirect: '/login',
    })
  )

  fastify.get('/auth/logout', (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        fastify.log.error(error)
      }
      res.clearCookie(fastify.config.COOKIE_NAME)
      res.redirect(`${fastify.config.CLIENT_URL}/login`)
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
