'use client'

import { useEffect } from 'react'
import { Button } from '@web/ui/components/button'

export default function SearchError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Search route error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold">Search failed</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || 'Could not complete your search'}
        </p>
      </div>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
