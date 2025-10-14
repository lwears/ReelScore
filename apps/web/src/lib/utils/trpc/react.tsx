'use client'

import type { AppRouter } from '@reelscore/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'
import { env } from 'apps/web/env'
import { useMemo } from 'react'
import superjson from 'superjson'

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we set staleTime above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000, // 30 seconds
        refetchOnWindowFocus: false, // Prevent aggressive refetching in development
      },
      mutations: {
        retry: 1, // Retry failed mutations once
      },
    },
  })

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

  const trpcClient = useMemo(
    () =>
      api.createClient({
        links: [
          loggerLink({
            enabled: (op) =>
              process.env.NODE_ENV === 'development' ||
              (op.direction === 'down' && op.result instanceof Error),
          }),
          httpBatchLink({
            transformer: superjson,
            url: `${env.NEXT_PUBLIC_API_URL}/trpc`,
            headers: {
              'x-trpc-source': 'nextjs-react',
            },
            fetch(url, options) {
              return fetch(url, {
                ...options,
                credentials: 'include',
              })
            },
          }),
        ],
      }),
    []
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  )
}
