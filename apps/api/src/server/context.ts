import { TRPCError } from '@trpc/server'
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import { PrismaClient, type User } from '@prisma/client'

const prisma = new PrismaClient()

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  if (req.user) {
    try {
      const user = req.user as User
      return { req, res, prisma, user }
    } catch (err) {
      throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' })
    }
  }

  return { req, res, prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
