import type { envSchema } from '@api/configs/env.config'

import type z from 'zod'

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
