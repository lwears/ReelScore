import z from 'zod'
import dotenv from 'dotenv'

dotenv.config()

export const envSchema = z.object({
  PORT: z.coerce.number().int().default(4000),
  NODE_ENV: z
    .enum(['local', 'development', 'test', 'production'])
    .default('development'),
  HOST: z.string().default('localhost:4000'),
  CLIENT_URL: z.string().default('localhost:3000'),
  SECRET_KEY: z.string().min(10),
  DATABASE_URL: z.string(),
  TRPC_PREFIX: z.string().default('/trpc'),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  TMDB_KEY: z.string(),
  TMDB_URL: z.string(),
})

export const env = envSchema.parse(process.env)
