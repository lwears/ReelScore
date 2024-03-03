import { loggerLink, httpBatchLink } from '@trpc/client'
import { experimental_createTRPCNextAppDirClient } from '@trpc/next/app-dir/client'

import superjson from 'superjson'

import type { AppRouter } from '@api/server/router'

export const api = experimental_createTRPCNextAppDirClient<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
        }),
      ],
    }
  },
})

// export const useAction = experimental_createActionHook({
//   transformer,
//   links: [experimental_serverActionLink()],
// });

//export { type RouterInputs, type RouterOutputs } from '@acme/api'
