import { Suspense } from 'react'

import { Movies } from './_components/movies'
import { MediaDisplaySkeleton } from '@web/ui/components/skeletons'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ query: string; page: string; show: boolean }>
}

export default async function Page(props: Props) {
  const { query = '', page = '1' } = await props.searchParams
  const currentPage = Number(page)

  return (
    <Suspense key={query + currentPage} fallback={<MediaDisplaySkeleton />}>
      <Movies page={currentPage} query={query} />
    </Suspense>
  )
}
