import type { Metadata } from 'next'
import { api } from '@web/app/utils/trpc/server'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function Page({
  params,
}: {
  params: { 'watch(ed)': string; content: 'tv-series' | 'movies' }
}) {
  const data = await api.tmdbRouter.searchMovie.query('test')
  //console.log(data)
  return (
    <div>
      <div>My Post: {params['watch(ed)']}</div>
      <div>My Post: {params.content}</div>
      <p>{JSON.stringify(data)}</p>
      {/* <p>{await api.healthcheck.query()}</p> */}
    </div>
  )
}
