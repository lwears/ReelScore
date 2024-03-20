import { PrismaClient } from '@prisma/client'

import type { Prisma, Serie } from '@prisma/client'
import type { Paginated } from '../movies/movies.service'

import { PAGE_SIZE } from '@api/constants'

const prisma = new PrismaClient()

const create = (data: Prisma.SerieCreateInput): Promise<Serie> =>
  prisma.serie.create({ data })

const list = async (
  userId: string,
  where?: Prisma.SerieWhereInput,
  page = 1,
  take = PAGE_SIZE
): Promise<Paginated<Serie>> =>
  prisma
    .$transaction([
      prisma.serie.count(),
      prisma.serie.findMany({
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

const getAll = (
  userId: string,
  where?: Prisma.SerieWhereInput
): Promise<Serie[]> => prisma.serie.findMany({ where: { userId, ...where } })

const del = (id: Prisma.UserWhereUniqueInput['id'], userId: string) =>
  prisma.serie.delete({ where: { id, userId } })

export const serieService = {
  create,
  list,
  getAll,
  delete: del,
}
