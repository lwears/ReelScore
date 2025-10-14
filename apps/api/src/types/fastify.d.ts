import 'fastify'
import { envSchema } from '@api/configs/env.config'
import type { User } from '@api/drizzle/schema'

import type z from 'zod'

declare module 'fastify' {
  interface PassportUser extends User {}
  interface FastifyInstance {
    config: z.infer<typeof envSchema>
  }
  interface FastifyRequest {
    user?: User
  }
}

envSchema
