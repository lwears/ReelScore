import { Suspense } from 'react'

import { MediaDisplaySkeleton } from '@web/ui/components/skeletons'
import { Series } from './_components/series'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ query: string; page: string }>
}

export default async function Page(props: Props) {
  const { query = '', page = '1' } = await props.searchParams
  const currentPage = Number(page)

  return (
    <Suspense key={query + currentPage} fallback={<MediaDisplaySkeleton />}>
      <Series page={currentPage} query={query} />
    </Suspense>
  )
}
