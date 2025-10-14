import { drizzle } from 'drizzle-orm/postgres-js'
import { pino } from 'pino'
import postgres from 'postgres'
import { env } from './configs/env.config'
import * as schema from './drizzle/schema'

// Create a logger for database operations
const logger = pino(
  env.NODE_ENV === 'production'
    ? { level: 'info' }
    : {
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: { colorize: true },
        },
      }
)

// Create the connection with proper pooling configuration
const client = postgres(env.DATABASE_URL, {
  max: 20, // Maximum pool size
  idle_timeout: 20, // Close idle connections after 20s
  connect_timeout: 10, // Connection timeout in seconds
  ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : undefined,
  onnotice: () => {
    // Intentionally silence PostgreSQL notices
  },
})

// Create the Drizzle database instance
export const db = drizzle(client, { schema })

// Test connection
async function testConnection() {
  try {
    await client`SELECT 1`
    logger.info({ service: 'database' }, 'Database connected successfully')
  } catch (error) {
    logger.error(
      { err: error, service: 'database' },
      'Database connection failed'
    )
    process.exit(1) // Exit if DB connection fails on startup
  }
}

testConnection()

export default db
