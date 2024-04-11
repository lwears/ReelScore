import { PrismaClient } from '@prisma/client'

import { PAGE_SIZE } from '@api/constants'

import type { Movie, Prisma } from '@prisma/client'
import type { CreateMovieSchema, UpdateMovieSchema } from './movies.dtos'

export interface Paginated<A> {
  results: A[]
  page: number
  count: number
  totalPages: number
}

export interface ListOptions {
  where?: Prisma.MovieWhereInput
  page?: number
  take?: number
}

const prisma = new PrismaClient()

const create = (userId: string, data: CreateMovieSchema) =>
  prisma.movie.create({ data: { ...data, User: { connect: { id: userId } } } })

const update = (userId: string, data: UpdateMovieSchema) =>
  prisma.movie.update({ data, where: { id: data.id, userId } })

const list = async (
  userId: string,
  { page = 1, take = PAGE_SIZE, where }: ListOptions
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

const del = (userId: string, id: Prisma.UserWhereUniqueInput['id']) =>
  prisma.movie.delete({ where: { id, userId } })

export const movieService = {
  list,
  create,
  update,
  delete: del,
}
