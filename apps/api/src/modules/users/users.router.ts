// import { z } from 'zod'
// import { TRPCError } from '@trpc/server'
// import { userDocs } from '@/openapi/user'
import { privateProcedure, publicProcedure, router } from '@api/server/trpc'

export const userRouter = router({
  getCurrentUser: privateProcedure.query(({ ctx }) => ctx.user ?? null),
})

// export const userRouter = router({
//   getAll: protectedProcedure
//     .meta({ openapi: userDocs.getAll })
//     .input(z.void())
//     .output(
//       z.array(
//         z.object({
//           id: z.string().uuid(),
//           email: z.string().email(),
//           name: z.string(),
//         }),
//       ),
//     )
//     .query(userController.getAll),
//   get: protectedProcedure
//     .meta({ openapi: userDocs.getUser })
//     .input(z.string().uuid())
//     .output(
//       z.object({
//         id: z.string().uuid(),
//         email: z.string().email(),
//         name: z.string(),
//       }),
//     )

//     .query(({ input }) => {
//       const user = database.users.find((_user) => _user.id === input.id)

//       if (!user) {
//         throw new TRPCError({
//           message: 'User not found',
//           code: 'NOT_FOUND',
//         })
//       }

//       return { user }
//     }),
// })
