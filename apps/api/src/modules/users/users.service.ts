import { eq } from 'drizzle-orm'
import db from '@api/db'
import { users } from '@api/drizzle/schema'

import type { User, NewUser } from '@api/drizzle/schema'

const create = async (data: NewUser): Promise<User> => {
  const [user] = await db.insert(users).values(data).returning()
  return user
}

const get = async (id: string): Promise<User | null> => {
  const [user] = await db.select().from(users).where(eq(users.id, id))
  return user ?? null
}

const getAll = async (): Promise<User[]> => {
  return db.select().from(users)
}

const update = async (
  id: string,
  data: Partial<Omit<User, 'id'>>
): Promise<User> => {
  const [user] = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning()
  return user
}

const del = async (id: string): Promise<User> => {
  const [user] = await db.delete(users).where(eq(users.id, id)).returning()
  return user
}

const findOrCreate = async (
  providerId: string,
  data: NewUser
): Promise<User> => {
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.providerId, providerId))

  if (existingUser) {
    return existingUser
  }

  return create(data)
}

export const userService = {
  findOrCreate,
  create,
  get,
  getAll,
  update,
  delete: del,
}
