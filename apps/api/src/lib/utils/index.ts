import { TRPCError } from '@trpc/server'

import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc'

import type { Profile as PassportProfile } from 'passport-google-oauth20'
import type { Prisma, Provider } from '@prisma/client'

export const prismaErrToTRPCError = (
  prismaErrCode: string,
  message: string
) => {
  const errorMap: Record<string, { code: TRPC_ERROR_CODE_KEY }> = {
    P2000: {
      code: 'PAYLOAD_TOO_LARGE',
    },
    P2029: {
      code: 'PAYLOAD_TOO_LARGE',
    },
    P2001: { code: 'NOT_FOUND' },
    P2015: { code: 'NOT_FOUND' },
    P2021: { code: 'NOT_FOUND' },
    P2022: { code: 'NOT_FOUND' },
    P2025: { code: 'NOT_FOUND' },
    P2002: { code: 'CONFLICT' },
    P2003: { code: 'CONFLICT' },
    P2004: { code: 'CONFLICT' },
    P2011: { code: 'BAD_REQUEST' },
    P2012: { code: 'BAD_REQUEST' },
    P2013: { code: 'BAD_REQUEST' },
    P2014: { code: 'BAD_REQUEST' },
    P2019: { code: 'BAD_REQUEST' },
    P2020: { code: 'BAD_REQUEST' },
    P2033: { code: 'BAD_REQUEST' },
    P2024: { code: 'TIMEOUT' },
    P2037: { code: 'TOO_MANY_REQUESTS' },
  }

  const errorCode = errorMap[prismaErrCode as keyof typeof errorMap]
  const error = { ...errorCode, message }

  const error_ = error
    ? new TRPCError(error)
    : new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal Server Error',
      })

  throw error_
}
// export const prismaErrToTRPCError = (prismaErrCode: string, message: string) => {
//   const errorMap: Record<
//     string,
//     { code: TRPC_ERROR_CODE_KEY; message: string }
//   > = {
//     P2000: {
//       code: 'PAYLOAD_TOO_LARGE',
//       message:
//         "The provided value for the column is too long for the column's type",
//     },
//     P2029: {
//       code: 'PAYLOAD_TOO_LARGE',
//       message: 'Query parameter limit exceeded error',
//     },
//     P2001: { code: 'NOT_FOUND', message: 'Media not found' },
//     P2015: { code: 'NOT_FOUND', message: 'Media not found' },
//     P2021: { code: 'NOT_FOUND', message: 'Media not found' },
//     P2022: { code: 'NOT_FOUND', message: 'Media not found' },
//     P2025: { code: 'NOT_FOUND', message: 'Media not found' },
//     P2002: { code: 'CONFLICT', message: 'Unique constraint failed' },
//     P2003: { code: 'CONFLICT', message: 'Foreign key constraint failed' },
//     P2004: { code: 'CONFLICT', message: 'Constraint failed' },
//     P2011: { code: 'BAD_REQUEST', message: 'Null Constraint Violation' },
//     P2012: { code: 'BAD_REQUEST', message: 'Missing required path value' },
//     P2013: { code: 'BAD_REQUEST', message: 'Missing required argument' },
//     P2014: {
//       code: 'BAD_REQUEST',
//       message: 'Change violates required relation',
//     },
//     P2019: { code: 'BAD_REQUEST', message: 'Input Error' },
//     P2020: { code: 'BAD_REQUEST', message: 'Value out of range' },
//     P2033: { code: 'BAD_REQUEST', message: 'Number does not fit withn range' },
//     P2024: { code: 'TIMEOUT', message: 'Database Timeout' },
//     P2037: { code: 'TOO_MANY_REQUESTS', message: 'Too Many Requests' },
//   }

//   const error = errorMap[prismaErrCode as keyof typeof errorMap]

//   const error_ = error
//     ? new TRPCError(error)
//     : new TRPCError({
//         code: 'INTERNAL_SERVER_ERROR',
//         message: 'Internal Server Error',
//       })

//   throw error_
// }

export const mapProviderUser = (
  p: PassportProfile
): Prisma.UserCreateInput => ({
  providerId: p.id,
  provider: p.provider.toUpperCase() as Provider,
  email: (p.emails?.length && p?.emails[0]?.value) as string,
  name: p.displayName,
})
