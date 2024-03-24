'use server'

import type { AppRouter } from '@api/server/router'
import type { TRPCLink } from '@trpc/client'
import {
  createTRPCProxyClient,
  createTRPCClient,
  httpBatchLink,
  httpLink,
  loggerLink,
} from '@trpc/client'
import { observable } from '@trpc/server/observable'
import { env } from 'apps/web/env'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
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
    loggerLink({
      enabled: (op) =>
        env.ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchLink({
      transformer: superjson,
      url: 'http://localhost:4000/trpc',
      headers() {
        return {
          cookie: cookies().toString(),
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
