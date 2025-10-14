import { FaceFrownIcon } from '@heroicons/react/24/outline'
import { Button } from '@web/ui/components/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested page</p>
      <Button asChild variant="primary" size="lg">
        <Link href="/movies">Go Back</Link>
      </Button>
    </main>
  )
}
