import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { jwtSecret } from '../routers/auth'
import type { User } from '@prisma/client'
import { userService } from '@/services/users'

export type Context = {
  user: User | null
  requestId: string
  req: FastifyRequest
  res: FastifyReply
}

export const createContext = async ({
  req,
  res,
}: CreateFastifyContextOptions): Promise<Context> => {
  const requestId = uuid()
  res.header('x-request-id', requestId)

  let user: User | null = null

  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const userId = jwt.verify(token, jwtSecret) as string
      if (userId) {
        user = (await userService.get(userId)) ?? null
      }
    }
  } catch (cause) {
    console.error(cause)
  }

  return { req, res, user, requestId }
}

export default createContext
