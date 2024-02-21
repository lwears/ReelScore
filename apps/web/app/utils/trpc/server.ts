'use server'

import type { AppRouter } from '@api/server/router'
import type { TRPCLink } from '@trpc/client'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { observable } from '@trpc/server/observable'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import superjson from 'superjson'

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

// const errorLink: TRPCLink<AppRouter> = (): OperationLink<AppRouter> => {
//   const link: OperationLink<AppRouter> = ({ op, next }) => {
//     return observable((observer) => {
//       next(op)
//         .pipe(
//           tap({
//             next: (result) => observer.next(result),
//             error: (result) => {
//               if (result.data?.code === 'UNAUTHORIZED') {
//                 observer.next(
//                   null as unknown as OperationResultEnvelope<unknown>,
//                 )
//                 redirect('/login')
//               }
//               observer.error(result)
//             },
//             complete: () => observer.complete(),
//           }),
//         )
//         .subscribe(observer)
//     })
//   }
//   return link
// }

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    // loggerLink({
    //   enabled: (op) => false,
    //   // enabled: (op) =>
    //   //   process.env.NODE_ENV === 'development' ||
    //   //   (op.direction === 'down' && op.result instanceof Error),
    // }),
    // errorLink,
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
        //.then((res) => {
        //   // console.log(err.())
        //   const clone = res.clone()
        //   let isError = false
        //   clone.json().then((data) => {
        //     //console.log(data[0].error.json.data.code)
        //     isError = data[0].error.json.data.code === 'UNAUTHORIZED'
        //   })
        //   isError && redirect('/login', RedirectType.replace)
        //   return res
        //})
      },
    }),
  ],
})