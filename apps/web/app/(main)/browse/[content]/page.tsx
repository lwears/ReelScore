import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

enum Content {
  SERIES = 'series',
  MOVIES = 'movies',
}

export default async function Page({
  params: { content },
}: {
  params: { content: Content }
}) {
  // const data = await api.movieRouter.getAll.query({ watched: true })

  // if (!['movies', 'series'].includes(content)) notFound()

  return (
    <div className="w-full text-white p-4">
      <div>My Content: {content}</div>
    </div>
  )
}
