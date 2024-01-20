import { PrismaClient } from '@prisma/client'
import { movieSeed, serieSeed, userSeed } from './seedData'

const prisma = new PrismaClient()

prisma.user
  .create({ data: userSeed })
  .then(() =>
    Promise.all([
      prisma.movie.createMany({ data: movieSeed }),
      prisma.serie.createMany({ data: serieSeed }),
    ]),
  )
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
