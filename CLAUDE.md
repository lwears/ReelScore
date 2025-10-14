# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ReelScore is a movie/TV series watchlist and scoring application built as a full-stack TypeScript monorepo. The project uses a modern tech stack with Fastify backend, Next.js frontend, and tRPC for type-safe API communication.

## Tech Stack

- **Backend**: Fastify server with tRPC, Drizzle ORM, PostgreSQL database, Redis for sessions
- **Frontend**: Next.js 14+ with App Router, React, Tailwind CSS
- **Auth**: Passport.js with GitHub and Google OAuth strategies
- **Validation**: Zod schemas throughout with drizzle-zod integration
- **Package Manager**: pnpm (v8.15.5+)

## Monorepo Structure

This is a pnpm workspace monorepo with two main applications:

- `apps/api/` - Fastify backend server
- `apps/web/` - Next.js frontend application

TypeScript path aliases:
- `@api/*` maps to `apps/api/src/*`
- `@web/*` maps to `apps/web/src/*`

## Development Commands

### Initial Setup

```bash
# Install dependencies
pnpm i

# Start Docker containers (PostgreSQL + Redis)
pnpm run setup          # Using docker-compose
pnpm run setup-podman   # Using podman-compose

# Generate and run Drizzle migrations
cd apps/api
pnpm run db:generate    # Generate migration files
pnpm run db:push        # Push schema to database
```

### Environment Configuration

Create `.env` files in both `apps/api/` and `apps/web/` based on `.env.example` files. Required:
- GitHub/Google OAuth credentials (GITHUB_CLIENT_ID/SECRET, GOOGLE_CLIENT_ID/SECRET)
- TMDB API key (TMDB_KEY)
- Database and Redis URLs (defaults work with pnpm run setup)

### Running the Project

```bash
# Run both frontend and backend in parallel
pnpm run dev

# Run individual apps
cd apps/api && pnpm run dev    # Backend only (port 4000)
cd apps/web && pnpm run dev    # Frontend only (port 3000)
```

### Building

```bash
# Build API
cd apps/api && pnpm run build

# Build web
cd apps/web && pnpm run build
```

### Code Quality

```bash
# Lint all code
pnpm run lint

# Format all code
pnpm run format
```

### Database Operations

```bash
cd apps/api

# Generate migration files from schema changes
pnpm run db:generate

# Push schema changes to database (development)
pnpm run db:push

# Run migrations (production)
pnpm run db:migrate

# Open Drizzle Studio (database GUI)
pnpm run db:studio
```

## Architecture

### Backend (apps/api/src/)

The backend follows a modular architecture:

- `main.ts` - Application entry point
- `server/` - Core server setup
  - `server.ts` - Fastify server configuration with plugins (CORS, session, tRPC, Swagger)
  - `trpc.ts` - tRPC initialization, middleware (authentication, lag simulation)
  - `router.ts` - Root tRPC router aggregating all module routers
  - `context.ts` - Request context creation (user, session, database)
- `modules/` - Feature modules (auth, movies, series, users, tmdb)
  - Each module contains: `*.router.ts`, `*.service.ts`, `*.dtos.ts`
- `drizzle/` - Database layer
  - `schema.ts` - Drizzle table definitions and Zod schemas
- `configs/` - Configuration files
- `db.ts` - Drizzle client singleton with postgres.js connection
- `lib/` - Shared utilities
- `types/` - TypeScript type definitions

**Database with Drizzle ORM**:
- Schema defined in `apps/api/src/drizzle/schema.ts`
- Uses `postgres` driver for connection
- Zod schemas auto-generated via `drizzle-zod`
- Migrations managed via `drizzle-kit`
- Configuration in `drizzle.config.ts` at project root

**tRPC Procedures**:
- `publicProcedure` - No authentication required
- `privateProcedure` - Requires authenticated user (via `isAuthenticated` middleware)

**Authentication**: Uses Fastify Passport plugin with GitHub/Google OAuth2 strategies. Sessions stored in Redis.

### Frontend (apps/web/src/)

Next.js App Router application:

- `app/` - Next.js app directory with file-based routing
  - `layout.tsx` - Root layout with TRPCReactProvider and Toaster
  - Page components using Server and Client Components
- `lib/` - Shared utilities
  - `utils/trpc/` - tRPC client setup
    - `react.tsx` - Client-side tRPC React hooks (`api.`)
    - `server.ts` - Server-side tRPC client for RSC
  - `requests/` - Request helper functions
- `ui/` - Reusable UI components
- `types/` - TypeScript types
- `middleware.ts` - Next.js middleware for route protection

**tRPC Usage**:
- Client components: Import `api` from `@web/lib/utils/trpc/react` and use hooks (e.g., `api.movieRouter.list.useQuery()`)
- Server components: Import `api` from `@web/lib/utils/trpc/server` and call procedures directly (e.g., `await api.movieRouter.list()`)

### Database Schema

Key models (see `apps/api/src/drizzle/schema.ts`):
- `users` - OAuth users (GitHub/Google providers)
- `movies` - User's movie watchlist with scores
- `series` - User's TV series watchlist with scores

All entities use UUID primary keys. Movies/Series are linked to TMDB API via `tmdbId`.

Relations:
- Users have many Movies (one-to-many with cascade delete)
- Users have many Series (one-to-many with cascade delete)
- Unique constraints on (tmdbId, userId) for both Movies and Series

## Code Style and Conventions

- TypeScript strict mode enabled
- ESLint with TypeScript, Unicorn plugins
- Prettier for formatting
- Husky pre-commit hooks with lint-staged
- Conventional commits enforced via commitlint
- Use `interface` over `type` (enforced by ESLint)
- Consistent type imports (`import type`)

## Important Notes

- **Module Pattern**: Each API module follows router → service → database layer
- **tRPC Version**: Using v11 (next.320), not stable v10
- **Session Management**: Redis-backed sessions, cookies sent with credentials
- **TMDB Integration**: The `tmdb` module fetches movie/series data from The Movie Database API
- **Lag Simulation**: Backend includes intentional lag middleware for development (bypassed for Next.js RSC requests)
- **Drizzle vs Prisma**: Migrated from Prisma to Drizzle for better TypeScript performance and more control
- **Error Handling**: PostgreSQL error codes are mapped to tRPC errors in `lib/utils/index.ts`

## Testing

Currently no test suite configured (`test` script exits with error). Tests would typically be added in module directories alongside routers/services.

## API Documentation

When the API server is running, Swagger UI is available at: `http://localhost:4000/docs`

The Swagger documentation is auto-generated from Fastify schemas.
