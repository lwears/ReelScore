import { Button } from '@web/ui/components/Button'
import Link from 'next/link'

interface Props {
  header: string
  pathname: string
  query: string
}

export default async function MediaHeader({ header, pathname, query }: Props) {
  console.log(pathname)
  return (
    <div className="flex w-full flex-row justify-between">
      <p className="text-primary-bg text-2xl font-bold capitalize">{header}</p>
      <Button asChild size="lg" variant="primary">
        <Link
          replace
          href={{
            pathname,
            query: {
              ...(query ? { query } : {}),
            },
          }}
        >
          More
        </Link>
      </Button>
    </div>
  )
}
