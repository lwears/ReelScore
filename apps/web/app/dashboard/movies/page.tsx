import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movies',
}

export default async function Page() {
  return (
    <main>
      <h1 className="text-xl md:text-2xl">Movies</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>Movies Page.tsx</p>
      </div>
    </main>
  )
}
