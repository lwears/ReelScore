'use server'

import { headers } from 'next/headers'
import type { TRPCLink } from '@trpc/client'
import { loggerLink, httpBatchLink, createTRPCProxyClient } from '@trpc/client'
import superjson from 'superjson'
import type { AppRouter } from '@api/server/router'
import { observable } from '@trpc/server/observable'
import { permanentRedirect } from 'next/navigation'

// export const api = experimental_createTRPCNextAppDirServer<AppRouter>({
//   config() {
//     return {
//       transformer: superjson,
//       links: [
//         loggerLink({
//           enabled: (opts) => {
//             //console.log(opts)
//             return (
//               process.env.NODE_ENV === 'development' ||
//               (opts.direction === 'down' && opts.result instanceof Error)
//             )
//           },
//         }),
//         httpBatchLink({
//           url: 'http://localhost:4000/trpc',
//           headers: Object.fromEntries(headers()),
//           fetch(url, options) {
//             return fetch(url, {
//               ...options,
//               credentials: 'include',
//             })
//           },
//         }),
//       ],
//     }
//   },
// })

export const customLink: TRPCLink<AppRouter> = () => {
  // here we just got initialized in the app - this happens once per app
  // useful for storing cache for instance
  return ({ next, op }) => {
    // this is when passing the result to the next link
    // each link needs to return an observable which propagates results
    return observable((observer) => {
      //console.log('performing operation:', op)
      const unsubscribe = next(op).subscribe({
        next(value) {
          //console.log('we received value', value)
          observer.next(value)
        },
        error(err) {
          //console.log('we received error', err)
          observer.error(err)
          if (err?.data?.code === 'UNAUTHORIZED') {
            console.log('LIAM123') // Works
            //permanentRedirect('/login') // Does not work
          }
        },
        complete() {
          observer.complete()
        },
      })
      return unsubscribe
    })
  }
}

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    // loggerLink({
    //   enabled: (op) => false,
    //   // enabled: (op) =>
    //   //   process.env.NODE_ENV === 'development' ||
    //   //   (op.direction === 'down' && op.result instanceof Error),
    // }),
    //customLink,
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
      headers(opts) {
        // Any of the passed operations can override the headers
        const headersOverride = opts.opList.find(
          (op) => op.context?.headersOverride,
        )?.context.headersOverride as Record<string, string> | undefined

        if (headersOverride) {
          //console.log('headersOverride', headersOverride)
          //console.log('headers', Object.fromEntries(headers()))
          return headersOverride
        }

        return Object.fromEntries(headers())
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
