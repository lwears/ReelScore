import { router } from '../../server/trpc'
// import { userCredentialsSchema } from './auth.dtos'
// import { signIn, signUp } from './auth.service'

export const authRouter = router({
  // TODO: Implement email/password authentication
  // signUp: publicProcedure
  //   .input(userCredentialsSchema)
  //   .mutation(async ({ input, ctx }) => signUp(input, ctx)),
  // signIn: publicProcedure
  //   .input(userCredentialsSchema)
  //   .mutation(async ({ input, ctx }) => signIn(input, ctx)),
}) satisfies ReturnType<typeof router>

export type AuthRouter = typeof authRouter
