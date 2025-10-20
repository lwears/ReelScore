import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { mapTmdbMedia, mapTmdbToCard } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddSerie } from '@web/ui/browse/buttons'
import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/cards-container'
import Empty from '@web/ui/components/empty'
import ErrorDisplay from '@web/ui/components/error'
import Pagination from '@web/ui/components/pagination'
import Link from 'next/link'
import { Suspense } from 'react'

interface Props {
  query: string
  page: number
}

export const Series = async ({ query, page }: Props) => {
  const fetchData = async () =>
    query
      ? api.tmdb.searchSerie.query({ query, page })
      : api.tmdb.popularSeries.query({ page })

  const { data, error } = await fetchData()

  if (error) {
    return <ErrorDisplay message={error} />
  }

  if (!data || !data.results || data.results.length === 0) {
    return <Empty />
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Suspense fallback={<div>Loading pagination...</div>}>
        <Pagination totalPages={data.total_pages} />
      </Suspense>
      <CardsContainer>
        {data.results.map((s) => {
          const serie = mapTmdbToCard(s)
          const mappedData = mapTmdbMedia(s)
          return (
            <Link key={s.id} href={`/series/${s.id}`}>
              <Card {...serie}>
                <AddSerie
                  buttonProps={{
                    variant: 'ghost',
                    size: 'card',
                    IconBefore: <CheckCircleIcon />,
                  }}
                  serie={mappedData}
                  watched={true}
                  text="Seen"
                />
                <AddSerie
                  buttonProps={{
                    variant: 'ghost',
                    size: 'card',
                    IconBefore: <PlusCircleIcon />,
                  }}
                  serie={mappedData}
                  watched={false}
                  text="Watchlist"
                />
              </Card>
            </Link>
          )
        })}
      </CardsContainer>
    </div>
  )
}
