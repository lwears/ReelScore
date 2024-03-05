import type { Prisma, Serie } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = (data: Prisma.SerieCreateInput): Promise<Serie> =>
  prisma.serie.create({ data })

const getAll = (
  userId: string,
  where?: Prisma.SerieWhereInput
): Promise<Serie[]> => prisma.serie.findMany({ where: { userId, ...where } })

const del = (id: Prisma.UserWhereUniqueInput['id'], userId: string) =>
  prisma.serie.delete({ where: { id, userId } })

export const serieService = {
  create,
  getAll,
  delete: del,
}
