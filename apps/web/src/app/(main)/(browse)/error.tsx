'use client'

import { Button } from '@web/ui/components/button'
import { useEffect } from 'react'

export default function BrowseError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Browse route error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold">Failed to load content</h2>
        <p className="mt-2 text-muted-foreground">
          {error.message || 'Could not fetch media data'}
        </p>
      </div>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  )
}
