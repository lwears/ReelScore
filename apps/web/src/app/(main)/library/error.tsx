'use client'

import { useEffect } from 'react'
import { Button } from '@web/ui/components/button'

export default function LibraryError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Library route error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold">Failed to load library</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || 'Could not fetch your library data'}
        </p>
      </div>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  )
}
