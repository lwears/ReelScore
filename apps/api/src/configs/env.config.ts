import z from 'zod'
import type { TypeOf } from 'zod'
import * as dotenv from 'dotenv'
dotenv.config()

export const envSchema = z.object({
  PORT: z.coerce.number().int().default(4000),
  NODE_ENV: z
    .enum(['local', 'development', 'test', 'production'])
    .default('development'),
  HOST: z.string().default('localhost'),
  SECRET_KEY: z.string().min(10),
  DATABASE_URL: z.string().url(),
  TRPC_PREFIX: z.string().default('/trpc'),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  TMDB_KEY: z.string(),
})

const env = envSchema.parse(process.env)

export const serverConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
  trpcPrefix: env.TRPC_PREFIX,
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
  secret: env.SECRET_KEY,
  tmdbKey: env.TMDB_KEY,
}

export type ServerConfig = typeof serverConfig

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof envSchema> {}
  }
}
