import { type Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type CreateFunction<T> = (data: T) => Promise<T>
type GetAllFunction<T> = () => Promise<T[]>
type GetByIdFunction<T> = (id: number) => Promise<T | null>
type DeleteFunction<T> = (id: number) => Promise<T | null>
type UpdateFunction<T> = (id: number, data: T) => Promise<T | null>

interface EntityService<T> {
  create: CreateFunction<T>
  getAll: GetAllFunction<T>
  getById: GetByIdFunction<T>
  delete: DeleteFunction<T>
  update: UpdateFunction<T>
}

const createService = <T>( // This line?
  modelName: Uncapitalize<Prisma.ModelName>,
): EntityService<T> => {
  const prismaModel = prisma[modelName]

  return {
    create: (data) => prismaModel.create({ data }),
    getAll: () => prismaModel.findMany(),
    getById: (id) => prismaModel.findUnique({ where: { id } }),
    delete: (id) => prismaModel.delete({ where: { id } }),
    update: (id, data) => prismaModel.update({ where: { id }, data }),
  }
}

//ctx.prisma.serie.findMany({ where: { userId: ctx.user.id } }),

// Usage
const movieService = createService<Prisma.MovieCreateInput>('movie')
const serieService = createService<Prisma.SerieCreateInput>('serie')
