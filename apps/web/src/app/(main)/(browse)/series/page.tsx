import { CardsSkeleton } from '@web/ui/skeletons'
import { Suspense } from 'react'
import { Series } from './series'

interface Props {
  searchParams: { query: string; page: string }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
}: Props) {
  const currentPage = Number(page)

  return (
    <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
      <Series page={currentPage} query={query} />
    </Suspense>
  )
}