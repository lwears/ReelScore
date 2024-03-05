import { CardsSkeleton } from '@web/ui/skeletons'
import { Suspense } from 'react'
import { Movies } from './movies'

interface Props {
  searchParams: { query: string; page: string }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
}: Props) {
  const currentPage = Number(page)

  return (
    <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
      <Movies page={currentPage} query={query} />
    </Suspense>
  )
}
