import type { Metadata } from 'next'
import { api } from '@web/app/utils/trpc/server'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      <h1 className="text-xl md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>Dashboard Page.tsx</p>
        <p>{await api.healthcheck.query()}</p>
        <p>{JSON.stringify(searchParams)}</p>
      </div>
    </div>
  )
}
