import z from 'zod'
import type { TypeOf } from 'zod'
import * as dotenv from 'dotenv'
dotenv.config()

export const envSchema = z.object({
  PORT: z.coerce.number().int().default(4000),
  NODE_ENV: z.enum(['local', 'development', 'test', 'production']).default('development'),
  HOST: z.string().default('localhost'),
  SECRET_KEY: z.string().min(10),
  JWT_EXPIRES_IN: z.string(),
  DATABASE_URL: z.string().url(),
  PREFIX: z.string().default('api'),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})

const env = envSchema.parse(process.env)

export const serverConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
  prefix: env.PREFIX,
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
}

export type ServerConfig = typeof serverConfig

export const authConfig = {
  secretKey: env.SECRET_KEY,
  jwtExpiresIn: env.JWT_EXPIRES_IN,
}

export type AuthConfig = typeof authConfig

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof envSchema> {}
  }
}
