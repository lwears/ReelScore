import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// HELP Using eslint-plugin-unicorn and it says you shoudn't have process.exit(1) in the catch here. thoughts?
export default prisma
  .$connect()
  .then(() => console.log('🚀 Database connected successfully'))
  .catch((error) => console.log(error))
  .finally(() => prisma.$disconnect())
