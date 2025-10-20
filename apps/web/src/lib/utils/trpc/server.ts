import 'server-only'

import type { AppRouter } from '@reelscore/api'
import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client'
import { env } from 'apps/web/env'
import { cookies } from 'next/headers'
import superjson from 'superjson'

// export const customLink: TRPCLink<AppRouter> = () => {
//   return ({ next, op }) => {
//     return observable((observer) => {
//       const unsubscribe = next(op).subscribe({
//         next(value) {
//           observer.next(value)
//         },
//         error(err) {
//           // console.log({ err })
//           if (err?.data?.code === 'UNAUTHORIZED') {
//             console.log('LIAM123') // Works
//             observer.complete()
//             redirect('/login') // Does not work
//           }
//           observer.error(err)
//         },
//         complete() {
//           observer.complete()
//         },
//       })
//       return unsubscribe
//     })
//   }
// }

export const api = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      transformer: superjson,
      url: `${env.NEXT_PUBLIC_API_URL}/trpc`,
      async headers() {
        return {
          cookie: (await cookies()).toString(),
          'x-trpc-source': 'rsc',
        }
      },
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        })
      },
    }),
  ],
})
