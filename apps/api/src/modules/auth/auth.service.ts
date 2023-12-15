import type { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import type { SignInDto, SignUpDto } from './auth.dtos'
import { sign } from 'jsonwebtoken'
import type { Context } from '../../server/context'
import { hash, compare } from 'bcrypt'
import { authConfig } from '@api/configs/env.config'

type UserResponse = Omit<User, 'password'>
type SignUpResult = UserResponse & { accessToken: string }

export const signUp = async (input: SignUpDto, ctx: Context): Promise<UserResponse> => {
  const bcryptHash = await hash(input.password, 10)

  const user = await ctx.prisma.user.create({
    data: {
      email: input.email,
      password: bcryptHash,
    },
  })
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}

export const signIn = async (input: SignInDto, ctx: Context): Promise<SignUpResult> => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  })

  const error = new TRPCError({
    message: 'Incorrect email or password',
    code: 'UNAUTHORIZED',
  })

  if (!user) {
    throw error
  }

  const result = await compare(input.password, user.password)

  if (!result) {
    throw error
  }

  const token = sign(
    {
      id: user.id,
    },
    authConfig.secretKey,
    { expiresIn: authConfig.jwtExpiresIn },
  )

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: token,
  }
}
