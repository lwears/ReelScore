import { PrismaClient } from '@prisma/client'

import type { Prisma } from '@prisma/client'
import type { CreateSerieSchema, UpdateSerieSchema } from './series.dtos'

import { PAGE_SIZE } from '@api/constants'

const prisma = new PrismaClient()

const create = (userId: string, data: CreateSerieSchema) =>
  prisma.serie.create({ data: { ...data, User: { connect: { id: userId } } } })

const update = (userId: string, data: UpdateSerieSchema) =>
  prisma.serie.update({ data, where: { id: data.id, userId } })

const list = async (
  userId: string,
  where?: Prisma.SerieWhereInput,
  page = 1,
  take = PAGE_SIZE
) =>
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

const del = (userId: string, id: Prisma.UserWhereUniqueInput['id']) =>
  prisma.serie.delete({ where: { id, userId } })

export const serieService = {
  list,
  create,
  update,
  delete: del,
}
