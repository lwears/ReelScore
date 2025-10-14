# Database Error Handling with Drizzle

## Overview

The codebase now has comprehensive PostgreSQL error handling that automatically converts database errors into user-friendly tRPC errors.

## Current Implementation

### Global Error Handler (`server.ts`)

All database errors are caught in the tRPC `onError` handler and automatically converted:

```typescript
onError({ error }: { error: TRPCError }) {
  // Handle database errors from Drizzle/PostgreSQL
  if (error.cause && typeof error.cause === 'object' && 'code' in error.cause) {
    try {
      handleDatabaseError(error.cause)
    } catch (dbError) {
      return dbError as TRPCError
    }
  }
  return error
}
```

### Error Mappings (`lib/utils/index.ts`)

PostgreSQL errors are mapped to appropriate HTTP status codes:

| PostgreSQL Error | tRPC Code | Description |
|-----------------|-----------|-------------|
| 23505 | CONFLICT | Unique constraint violation (duplicate record) |
| 23503 | CONFLICT | Foreign key constraint violation |
| 23502 | BAD_REQUEST | Not null constraint violation |
| 23514 | BAD_REQUEST | Check constraint violation |
| 22001 | PAYLOAD_TOO_LARGE | String too long |
| 22003 | BAD_REQUEST | Numeric value out of range |
| 22P02 | BAD_REQUEST | Invalid data format |
| 57014 | TIMEOUT | Query timeout |
| 53300 | TOO_MANY_REQUESTS | Too many connections |
| 42P01 | INTERNAL_SERVER_ERROR | Table not found |
| 42703 | INTERNAL_SERVER_ERROR | Column not found |

## Usage in Services (Optional)

For explicit error handling in services, you can use the `withDbErrorHandling` wrapper:

### Example: movies.service.ts (with wrapper)

```typescript
import { withDbErrorHandling } from '@api/lib/utils/withDbErrorHandling'

const create = withDbErrorHandling(async (userId: string, data: CreateMovieSchema): Promise<Movie> => {
  const [movie] = await db
    .insert(movies)
    .values({
      ...data,
      userId,
    })
    .returning()
  return movie
})
```

### Current Approach (works fine)

Your current services work without the wrapper because errors bubble up to the tRPC `onError` handler:

```typescript
const create = async (userId: string, data: CreateMovieSchema): Promise<Movie> => {
  const [movie] = await db
    .insert(movies)
    .values({
      ...data,
      userId,
    })
    .returning()
  return movie  // Errors automatically caught by tRPC onError handler
}
```

## Error Response Examples

### Duplicate Movie (23505 - Unique Constraint)

**Request:**
```typescript
movieRouter.create.mutate({
  tmdbId: 12345,
  title: "Inception",
  // ... (already exists for this user)
})
```

**Response:**
```json
{
  "error": {
    "code": "CONFLICT",
    "message": "A record with this value already exists"
  }
}
```

### Missing Required Field (23502 - Not Null)

**Request:**
```typescript
movieRouter.create.mutate({
  // missing tmdbId
  title: "Inception"
})
```

**Response:**
```json
{
  "error": {
    "code": "BAD_REQUEST",
    "message": "Required field 'tmdbId' is missing"
  }
}
```

### Value Too Long (22001 - String Truncation)

**Request:**
```typescript
movieRouter.create.mutate({
  tmdbId: 12345,
  title: "A".repeat(300), // title is varchar(255)
})
```

**Response:**
```json
{
  "error": {
    "code": "PAYLOAD_TOO_LARGE",
    "message": "Value too long for field 'title'"
  }
}
```

## Improvements Over Prisma

1. **More detailed error messages**: Uses PostgreSQL's `detail`, `column`, and `constraint` fields
2. **Cleaner code**: No need for `instanceof` checks or Prisma-specific error types
3. **Better logging**: Logs unhandled error codes for debugging
4. **Direct PostgreSQL mapping**: Works with any PostgreSQL driver (not just Drizzle)

## When to Use Explicit Error Handling

You **don't need** the `withDbErrorHandling` wrapper in most cases because the global `onError` handler catches everything.

Use explicit error handling when you want to:
- Add custom error messages based on business logic
- Handle specific errors differently
- Add additional logging or monitoring
- Transform errors before they reach the client

### Example: Custom Error Message

```typescript
const create = async (userId: string, data: CreateMovieSchema): Promise<Movie> => {
  try {
    const [movie] = await db
      .insert(movies)
      .values({ ...data, userId })
      .returning()
    return movie
  } catch (error) {
    // Check for specific duplicate error
    if (error && typeof error === 'object' && 'code' in error) {
      const pgError = error as { code: string }
      if (pgError.code === '23505') {
        throw new TRPCError({
          code: 'CONFLICT',
          message: `You've already added "${data.title}" to your list`,
        })
      }
    }
    // Fall back to standard error handling
    handleDatabaseError(error)
  }
}
```

## Debugging

When an unhandled PostgreSQL error occurs, it's logged to the console:

```
Unhandled PostgreSQL error code: 23514 { code: '23514', detail: '...', ... }
```

This helps identify new error codes that should be added to the error map.
