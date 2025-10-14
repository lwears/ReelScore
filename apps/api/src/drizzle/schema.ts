import { pgTable, uuid, varchar, timestamp, integer, boolean, pgEnum } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

// Provider enum
export const providerEnum = pgEnum('Provider', ['GITHUB', 'GOOGLE'])

// Users table
export const users = pgTable('User', {
  id: uuid('id').primaryKey().defaultRandom(),
  providerId: varchar('providerId', { length: 255 }).notNull().unique(),
  provider: providerEnum('provider').notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
})

// Add unique constraint for email + provider
// Note: This is handled via unique index in migration

// Movies table
export const movies = pgTable('Movie', {
  id: uuid('id').primaryKey().defaultRandom(),
  tmdbId: integer('tmdbId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  posterPath: varchar('posterPath', { length: 500 }),
  releaseDate: timestamp('releaseDate'),
  tmdbScore: integer('tmdbScore').default(0).notNull(),
  score: integer('score').default(0).notNull(),
  watched: boolean('watched').default(false).notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Series table
export const series = pgTable('Serie', {
  id: uuid('id').primaryKey().defaultRandom(),
  tmdbId: integer('tmdbId').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  posterPath: varchar('posterPath', { length: 500 }),
  firstAired: timestamp('firstAired'),
  tmdbScore: integer('tmdbScore').default(0).notNull(),
  score: integer('score').default(0).notNull(),
  watched: boolean('watched').default(false).notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Infer types
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Movie = typeof movies.$inferSelect
export type NewMovie = typeof movies.$inferInsert

export type Serie = typeof series.$inferSelect
export type NewSerie = typeof series.$inferInsert

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users)
export const selectUserSchema = createSelectSchema(users)

export const insertMovieSchema = createInsertSchema(movies)
export const selectMovieSchema = createSelectSchema(movies)

export const insertSerieSchema = createInsertSchema(series)
export const selectSerieSchema = createSelectSchema(series)

export type Provider = 'GITHUB' | 'GOOGLE'
