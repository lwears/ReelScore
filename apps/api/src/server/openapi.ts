import type { OpenApiRouter } from 'trpc-openapi'
import { generateOpenApiDocument } from 'trpc-openapi'

import { appRouter } from './router'

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(
  appRouter as OpenApiRouter,
  {
    title: 'Example CRUD API',
    description: 'OpenAPI compliant REST API built using tRPC with Fastify',
    version: '1.0.0',
    baseUrl: 'http://localhost:3000/api',
    docsUrl: 'https://github.com/jlalmes/trpc-openapi',
    tags: ['auth', 'users', 'posts'],
  },
)

export default openApiDocument
