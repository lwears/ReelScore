import type { GetServerSidePropsContext, Metadata } from 'next'
import { helpers, trpc } from '../trpc/trpc'
import { createServerSideHelpers } from '@trpc/react-query/server'
import superjson from 'superjson'
import { appRouter } from '@api/server/router'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export async function getStaticProps(
  context: GetServerSidePropsContext<{ id: string }>,
) {
  await helpers.healthcheck.prefetch()
  // Make sure to return { props: { trpcState: helpers.dehydrate() } }
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  }
}

export default async function Page() {
  const userQuery = trpc.healthcheck.useQuery()

  return (
    <main>
      <h1 className="text-xl md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>Dashboard Page.tsx</p>
        <p>{userQuery.data}</p>
      </div>
    </main>
  )
}
