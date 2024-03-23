import { Suspense } from 'react'

import { Movies } from './movies'
import { MediaDisplaySkeleton } from '@web/ui/components/skeletons'

interface Props {
  searchParams: { query: string; page: string }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
}: Props) {
  const currentPage = Number(page)

  return (
    <Suspense key={query + currentPage} fallback={<MediaDisplaySkeleton />}>
      <Movies page={currentPage} query={query} />
    </Suspense>
  )
}
