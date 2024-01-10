import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
}

export default async function Page() {
  return (
    <main>
      <h1 className="text-xl md:text-2xl">Search</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>Search Page.tsx</p>
      </div>
    </main>
  )
}
