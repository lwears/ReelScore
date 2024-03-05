import type { Prisma, User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = (data: Prisma.UserCreateInput): Promise<User> =>
  prisma.user.create({ data })

const get = (id: Prisma.UserWhereUniqueInput['id']): Promise<User | null> =>
  prisma.user.findUnique({ where: { id } })

const getAll = (): Promise<User[]> => prisma.user.findMany()

const update = (
  id: Prisma.UserWhereUniqueInput['id'],
  data: Prisma.UserUpdateInput
): Promise<User> => prisma.user.update({ where: { id }, data })

const del = (id: Prisma.UserWhereUniqueInput['id']) =>
  prisma.user.delete({ where: { id } })

const findOrCreate = (data: Prisma.UserCreateInput): Promise<User> =>
  prisma.user
    .findUnique({ where: { googleId: data.googleId } })
    .then((user) => user ?? create(data))

export const userService = {
  findOrCreate,
  create,
  get,
  getAll,
  update,
  delete: del,
}
