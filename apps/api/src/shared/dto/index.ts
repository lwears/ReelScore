import { z } from 'zod'

import { PAGE_SIZE } from '@api/constants'

export const listSchema = z.object({
  watched: z.boolean({ required_error: 'watched boolean is required' }),
  limit: z.number().min(1).max(100).default(PAGE_SIZE),
  page: z.number().min(1).default(1).optional(),
  query: z.string().optional(),
})
