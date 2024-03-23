'use server'

import type { AppRouter } from '@api/server/router'
import type { TRPCLink } from '@trpc/client'
import { createTRPCProxyClient, httpLink, loggerLink } from '@trpc/client'
import { observable } from '@trpc/server/observable'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import superjson from 'superjson'

export const customLink: TRPCLink<AppRouter> = () => {
  return ({ next, op }) => {
    return observable((observer) => {
      const unsubscribe = next(op).subscribe({
        next(value) {
          observer.next(value)
        },
        error(err) {
          // console.log({ err })
          if (err?.data?.code === 'UNAUTHORIZED') {
            console.log('LIAM123') // Works
            observer.complete()
            redirect('/login') // Does not work
          }
          observer.error(err)
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
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    // errorLink,
    // TODO Switch back to batch stream
    httpLink({
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
