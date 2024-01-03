import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma
  .$connect()
  .then(() => console.log('🚀 Database connected successfully'))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
