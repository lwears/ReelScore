import type { NewUser, Provider } from '@api/drizzle/schema'
import { TRPCError } from '@trpc/server'

import type { Profile as PassportProfile } from 'passport-google-oauth20'
import { pino } from 'pino'

// Create a logger for utility functions
const logger = pino(
  process.env.NODE_ENV === 'production'
    ? { level: 'info' }
    : {
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: { colorize: true },
        },
      }
)

// PostgreSQL error interface
interface PostgresError extends Error {
  code?: string
  detail?: string
  table?: string
  constraint?: string
  schema?: string
  column?: string
}

/**
 * Handles database errors from Drizzle/PostgreSQL and converts them to tRPC errors
 * @param error - The error from the database operation
 * @returns Never (always throws)
 */
export const handleDatabaseError = (error: unknown): never => {
  // Check if it's a PostgreSQL error
  if (error && typeof error === 'object' && 'code' in error) {
    const pgError = error as PostgresError
    const errorCode = pgError.code

    // PostgreSQL error code mappings
    // Reference: https://www.postgresql.org/docs/current/errcodes-appendix.html
    const errorMap: Record<
      string,
      {
        code:
          | 'NOT_FOUND'
          | 'CONFLICT'
          | 'BAD_REQUEST'
          | 'TIMEOUT'
          | 'TOO_MANY_REQUESTS'
          | 'PAYLOAD_TOO_LARGE'
          | 'INTERNAL_SERVER_ERROR'
        message: string
      }
    > = {
      // Unique constraint violation
      '23505': {
        code: 'CONFLICT',
        message: pgError.detail || 'A record with this value already exists',
      },
      // Foreign key constraint violation
      '23503': {
        code: 'CONFLICT',
        message: pgError.detail || 'Referenced record does not exist',
      },
      // Not null constraint violation
      '23502': {
        code: 'BAD_REQUEST',
        message: `Required field '${pgError.column || 'unknown'}' is missing`,
      },
      // Check constraint violation
      '23514': {
        code: 'BAD_REQUEST',
        message:
          pgError.detail || 'Value does not meet validation requirements',
      },
      // String data right truncation
      '22001': {
        code: 'PAYLOAD_TOO_LARGE',
        message: `Value too long for field '${pgError.column || 'unknown'}'`,
      },
      // Numeric value out of range
      '22003': {
        code: 'BAD_REQUEST',
        message: 'Numeric value is out of range',
      },
      // Invalid text representation
      '22P02': {
        code: 'BAD_REQUEST',
        message: 'Invalid data format',
      },
      // Division by zero
      '22012': {
        code: 'BAD_REQUEST',
        message: 'Division by zero',
      },
      // Query timeout
      '57014': {
        code: 'TIMEOUT',
        message: 'Database query timed out',
      },
      // Too many connections
      '53300': {
        code: 'TOO_MANY_REQUESTS',
        message: 'Too many database connections',
      },
      // Undefined table
      '42P01': {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Database table not found',
      },
      // Undefined column
      '42703': {
        code: 'INTERNAL_SERVER_ERROR',
        message: `Database column '${pgError.column || 'unknown'}' not found`,
      },
    }

    if (errorCode && errorMap[errorCode]) {
      const mappedError = errorMap[errorCode]
      throw new TRPCError({
        code: mappedError.code,
        message: mappedError.message,
        cause: pgError,
      })
    }

    // Log unhandled PostgreSQL error codes for debugging
    logger.error(
      {
        errorCode,
        pgError,
        service: 'database',
      },
      'Unhandled PostgreSQL error code'
    )
  }

  // Generic database error
  throw new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'A database error occurred',
    cause: error,
  })
}

/**
 * Maps a Passport profile to a user creation object
 * @param p - Passport profile from OAuth provider
 * @returns User creation data
 * @throws {TRPCError} If email is not provided by OAuth provider
 */
export const mapProviderUser = (p: PassportProfile): NewUser => {
  const email = p.emails?.[0]?.value

  if (!email) {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message:
        'Email is required from OAuth provider. Please ensure your account has a verified email address.',
    })
  }

  return {
    providerId: p.id,
    provider: p.provider.toUpperCase() as Provider,
    email,
    name: p.displayName || 'Unknown User',
  }
}
