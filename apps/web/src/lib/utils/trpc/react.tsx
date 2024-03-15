'use client'

import { useState } from 'react'
import superjson from 'superjson'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  httpBatchLink,
  loggerLink,
  unstable_httpBatchStreamLink,
} from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '@api/server/trpc'

const createQueryClient = () => new QueryClient()

let clientQueryClientSingleton: QueryClient | undefined
const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient()
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient())
}

export const api = createTRPCReact<AppRouter>()

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === 'development' ||
            (op.direction === 'down' && op.result instanceof Error),
        }),
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
            })
          },
        }),
      ],
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  )
}
