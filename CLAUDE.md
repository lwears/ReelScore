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

- `apps/api/` - Fastify backend server (package: `@reelscore/api`)
- `apps/web/` - Next.js frontend application (package: `web`)

**Type Sharing Strategy**:
- The API package exports its tRPC router types via `apps/api/src/index.ts`
- The web app imports API types as a workspace dev dependency: `@reelscore/api`
- Web uses TypeScript project references to the API for better type checking
- This allows independent deployment while maintaining type safety during development

TypeScript path aliases:
- `@api/*` maps to `apps/api/src/*` (internal API use only)
- `@web/*` maps to `apps/web/src/*`

**Package Naming**:
- API: `@reelscore/api` - properly scoped for npm publishing if needed
- Web: `web` - private package, Next.js app

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

The monorepo supports both full and independent builds:

```bash
# Build everything (API first, then web)
pnpm run build

# Build API independently
pnpm -w run build:api

# Build web independently (requires API types to be built first)
pnpm -w run build:web

# Type checking
pnpm run typecheck        # Check both packages
pnpm -w run typecheck:api # Check API only
pnpm -w run typecheck:web # Check web only
```

**Build Order**: The API must be built before the web app because the web app depends on API type definitions. The main `build` script handles this automatically.

### Code Quality

This project uses a **hybrid linting approach** for optimal coverage:

**Primary Linter: Biome** (95% of rules)
- Fast Rust-based linter and formatter (50-100x faster than ESLint)
- 340+ migrated rules from ESLint, TypeScript-ESLint, and Prettier
- Automatic import sorting and organization
- Single-quote strings, 2-space indentation, semicolons as needed

**Supplementary: ESLint** (4 specific Unicorn rules)
- `unicorn/no-process-exit` - Prevent abrupt process termination
- `unicorn/prefer-top-level-await` - Encourage modern async patterns
- `unicorn/prefer-module` - Enforce ESM over CommonJS
- `unicorn/no-anonymous-default-export` - Require named exports

```bash
# Lint everything (runs Biome + ESLint)
pnpm run lint

# Lint and auto-fix issues
pnpm run lint:fix

# Run individual linters
pnpm run lint:biome   # Biome only
pnpm run lint:eslint  # ESLint only

# Format all code (Biome)
pnpm run format

# Check formatting without making changes
pnpm run format:check
```

**Configuration Files**:
- `biome.json` - Main linter and formatter config
- `.eslintrc.json` - Minimal config with 4 Unicorn rules (all others disabled)
- `.eslintignore` - Excludes dist, .next, and CommonJS config files
- VCS integration enabled - Biome respects `.gitignore`

**Intentional `any` Usage**:
Some files use `as any` type assertions with `biome-ignore` comments for valid reasons:
- `apps/api/src/lib/factories/createMediaService.ts` - Generic factory pattern with Drizzle ORM
- See inline comments for detailed explanations

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
- Type imports: Import `AppRouter`, `RouterInputs`, `RouterOutputs` from `@reelscore/api` package
- Client components: Import `api` from `@web/lib/utils/trpc/react` and use hooks (e.g., `api.movie.list.useQuery()`)
- Server components: Import `api` from `@web/lib/utils/trpc/server` and call procedures directly (e.g., `await api.movie.list()`)
- Router names: `user`, `tmdb`, `movie`, `series` (not `movieRouter`, etc.)

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
- **Hybrid Linting**: Biome (primary) + ESLint (4 Unicorn rules)
  - Biome: 340+ migrated rules, automatic import sorting
  - ESLint: Specific rules for process.exit, top-level await, ESM, named exports
  - Single-quote strings, 2-space indentation, semicolons as needed (ASI-safe)
- Husky v9 pre-commit hooks with lint-staged (runs both linters)
- Conventional commits enforced via commitlint
- Use `interface` over `type` (enforced by Biome)
- Consistent type imports (`import type`)
- Modern `as const` patterns instead of enums (no enum keyword)

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

## Deployment

The monorepo is structured to support independent deployment of API and web applications:

### Deployment Strategy

**API Deployment** (`apps/api/`):
- Build output: `apps/api/dist/`
- Entry point: `apps/api/dist/main.js`
- Environment: Node.js runtime
- Recommended platforms: Railway, Render, Fly.io, Docker container
- Required services: PostgreSQL database, Redis instance
- Build command: `pnpm -w run build:api`
- Start command: `node apps/api/dist/main.js` or `pnpm --filter=@reelscore/api start`

**Web Deployment** (`apps/web/`):
- Build output: `apps/web/.next/`
- Framework: Next.js 15+ with App Router
- Recommended platform: Vercel (optimized for Next.js)
- Build command: `pnpm -w run build:api && pnpm -w run build:web`
- Note: API must be built first to generate type definitions
- Start command: `pnpm --filter=web start`

### Docker Deployment

For containerized deployment, create separate Dockerfiles for API and web:

**API Dockerfile** (`apps/api/Dockerfile`):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY apps/api/package.json ./apps/api/
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY apps/api ./apps/api
RUN pnpm --filter=@reelscore/api build
CMD ["node", "apps/api/dist/main.js"]
```

**Web Dockerfile** (`apps/web/Dockerfile`):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY apps/api ./apps/api
COPY apps/web ./apps/web
RUN pnpm run build
CMD ["pnpm", "--filter=web", "start"]
```

### CI/CD Recommendations

**GitHub Actions example**:
```yaml
# Build API
- run: pnpm -w run build:api
# Deploy API to hosting platform

# Build Web (API types already available)
- run: pnpm -w run build:web
# Deploy web to Vercel/hosting platform
```

**Key Points**:
- API and web can be deployed to different platforms
- Web build requires API types, so build API first or ensure types are available
- Both apps share some dependencies (zod, superjson, @trpc/server) but deploy independently
- Use environment variables for API_URL configuration in web app
