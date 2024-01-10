import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@api/server/router'
import { createServerSideHelpers } from '@trpc/react-query/server'
import superjson from 'superjson'

export const trpc = createTRPCReact<AppRouter>()

const proxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
  transformer: superjson,
})

export const helpers = createServerSideHelpers({
  client: proxyClient,
})
