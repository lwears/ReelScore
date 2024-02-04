import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import { api } from '@web/app/utils/trpc/server'
import type { Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Search',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const search =
    typeof searchParams.query === 'string' ? searchParams.query : undefined

  if (!search) return <p>No Search Query</p>

  //TODO : Remove String
  const data = await api.tmdbRouter.searchMulti.query({
    page: page,
    query: search,
  })

  if (!data.results.length) {
    return <EmptyState />
  }

  return (
    <div className="dark:text-white">
      <h1 className="text-xl md:text-2xl">Search</h1>
      <p>{JSON.stringify(searchParams)}</p>
      <div className="flex space-x-6">
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(search ? { query: search } : {}),
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={clsx(
            'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
            page <= 1 && 'pointer-events-none opacity-50',
          )}
        >
          Previous
        </Link>
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(search ? { query: search } : {}),
              page: page + 1,
            },
          }}
          className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
        >
          Next
        </Link>
      </div>
      <CardsContainer>
        {data.results.map((content) => {
          return <Card key={content.id} {...content} />
        })}
      </CardsContainer>
    </div>
  )
}

const EmptyState = () => {
  return (
    <div>
      <p>No content found!</p>
    </div>
  )
}
