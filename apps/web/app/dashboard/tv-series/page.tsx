import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TV Series',
}

export default async function Page() {
  return (
    <main>
      <h1 className="text-xl md:text-2xl">TV Series</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>TV Series Page.tsx</p>
      </div>
    </main>
  )
}
