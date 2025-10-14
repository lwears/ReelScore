import Link from 'next/link'
import { Suspense } from 'react'

import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/cards-container'
import Empty from '@web/ui/components/empty'
import Pagination from '@web/ui/components/pagination'
import Error from '@web/ui/components/error'
import { mapTmdbMedia, mapTmdbToCard } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddMovie } from '@web/ui/browse/buttons'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'

interface Props {
  query: string
  page: number
}

export const Movies = async ({ query, page }: Props) => {
  const fetchData = () =>
    query
      ? api.tmdb.searchMovie.query({ query, page })
      : api.tmdb.popularMovies.query({ page })

  const { data, error } = await fetchData()

  // {"status_code":7,"status_message":"Invalid API key: You must be granted a valid key.","success":false}

  if (error) {
    return <Error message={String(error) || 'An error occurred'} />
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
        {data.results.map((m) => {
          const movie = mapTmdbToCard(m)
          const mappedData = mapTmdbMedia(m)
          return (
            <Link key={m.id} href={`/movies/${m.id}`}>
              <Card {...movie}>
                <AddMovie
                  buttonProps={{
                    variant: 'ghost',
                    size: 'card',
                    IconBefore: <CheckCircleIcon />,
                  }}
                  movie={mappedData}
                  watched={true}
                  text="Seen"
                />
                <AddMovie
                  buttonProps={{
                    variant: 'ghost',
                    size: 'card',
                    IconBefore: <PlusCircleIcon />,
                  }}
                  movie={mappedData}
                  watched={true}
                  text="WatchList"
                />
              </Card>
            </Link>
          )
        })}
      </CardsContainer>
    </div>
  )
}
