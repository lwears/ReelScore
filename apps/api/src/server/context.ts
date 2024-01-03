import { TRPCError } from '@trpc/server'
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import { verify } from 'jsonwebtoken'
import type { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

import { get } from 'env-var'

export const authConfig = {
  secretKey: get('SECRET_KEY').required().asString(),
  jwtExpiresIn: get('JWT_EXPIRES_IN').required().asString(),
}

export const prisma = new PrismaClient()

async function decodeAndVerifyJwtToken(token: string): Promise<User> {
  const decoded = verify(token, authConfig.secretKey)
  return decoded as User
}

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  if (req.headers.authorization) {
    try {
      const user = await decodeAndVerifyJwtToken(req.headers.authorization.split(' ')[1])
      return { req, res, prisma, user }
    } catch (err) {
      throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' })
    }
  }

  return { req, res, prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
