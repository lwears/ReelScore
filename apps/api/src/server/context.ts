import { TRPCError } from '@trpc/server'
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import type { User } from '@api/drizzle/schema'
import db from '@api/db'
import '@api/types/fastify'

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  if (req.user) {
    const user = req.user as User
    return { req, res, user, db }
  }

  return { req, res, db }
}

export type Context = inferAsyncReturnType<typeof createContext>
