import type { Metadata } from 'next'

import { Movies } from './Movies'
import { Series } from './Series'

import Tabs from '@web/app/ui/shared/Tabs'

export const metadata: Metadata = {
  title: 'Dashboard',
}

enum Content {
  SERIES = 'series',
  MOVIES = 'movies',
}

export default async function Page({
  params: { content, watched },
}: {
  params: { watched: string; content: Content }
}) {
  // const data = await api.movieRouter.getAll.query({ watched: true })

  // if (!['movies', 'series'].includes(content)) notFound()

  return (
    <div className="w-full text-white p-4">
      {/* <Tabs /> */}
      <div>My Watched: {watched}</div>
      <div>My Content: {content}</div>

      {content === Content.MOVIES && <Movies />}
      {content === Content.SERIES && <Series />}
    </div>
  )
}
