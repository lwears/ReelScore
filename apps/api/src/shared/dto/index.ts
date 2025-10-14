import { PAGE_SIZE } from '@api/constants'
import z from 'zod'

export const listSchema = z.object({
  watched: z.boolean({ message: 'watched boolean is required' }),
  limit: z.number().min(1).max(100).default(PAGE_SIZE),
  page: z.number().min(1).default(1).optional(),
  query: z.string().optional(),
})
