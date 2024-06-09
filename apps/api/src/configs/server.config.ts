import type { TypeOf } from 'zod'
import type { envSchema } from './env.config'
import { env } from './env.config'

export const serverConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
  trpcPrefix: env.TRPC_PREFIX,
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
  githubClientId: env.GITHUB_CLIENT_ID,
  githubClientSecret: env.GITHUB_CLIENT_SECRET,
  secret: env.SECRET_KEY,
  tmdbKey: env.TMDB_KEY,
  tmdbUrl: env.TMDB_URL,
  host: env.HOST,
  clientUrl: env.CLIENT_URL,
}

export type ServerConfig = typeof serverConfig

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof envSchema> {}
  }
}
