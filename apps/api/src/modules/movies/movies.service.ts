import { PAGE_SIZE } from '@api/constants'
import type { Movie, Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

export interface Paginated<A> {
  results: A[]
  page: number
  count: number
  totalPages: number
}

const prisma = new PrismaClient()

const create = (data: Prisma.MovieCreateInput) => prisma.movie.create({ data })

const list = async (
  userId: string,
  where?: Prisma.MovieWhereInput,
  page = 1,
  take = PAGE_SIZE
): Promise<Paginated<Movie>> =>
  prisma
    .$transaction([
      prisma.movie.count({ where: { ...where, userId } }),
      prisma.movie.findMany({
        take,
        where: { ...where, userId },
        skip: (page - 1) * take,
        orderBy: { tmdbScore: 'desc' },
      }),
    ])
    .then(([count, results]) => ({
      results,
      count,
      totalPages: Math.ceil(count / take),
      page,
    }))

const del = (id: Prisma.UserWhereUniqueInput['id'], userId: string) =>
  prisma.movie.delete({ where: { id, userId } })

export const movieService = {
  create,
  list,
  delete: del,
}
