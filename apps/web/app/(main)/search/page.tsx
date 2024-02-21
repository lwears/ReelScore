import type { Metadata } from 'next'
import { Suspense } from 'react'

import { CardsSkeleton } from '@web/app/ui/skeletons'
import { Movies } from './Movies'
import { Series } from './Series'

export const metadata: Metadata = {
  title: 'Search',
}
interface Props {
  searchParams: { query: string; page: string }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
}: Props) {
  if (!query) return <p>No Search Query</p>

  return (
    <div className="flex h-full flex-col items-center gap-5 px-20 py-6">
      <Suspense fallback={<CardsSkeleton />}>
        <Movies query={query} />
      </Suspense>
      <Suspense fallback={<CardsSkeleton />}>
        <Series query={query} />
      </Suspense>
    </div>
  )
}
