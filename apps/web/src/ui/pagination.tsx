import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  page: number
}

export default function Pagination({ page }: Props) {
  return (
    <div className="flex space-x-6">
      <Link
        href={{
          pathname: '/search',
          query: {
            ...(query ? { query } : {}),
            page: currentPage > 1 ? currentPage - 1 : 1,
          },
        }}
        className={clsx(
          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          currentPage <= 1 && 'pointer-events-none opacity-50'
        )}
      >
        Previous
      </Link>
      <Link
        href={{
          pathname: '/search',
          query: {
            ...(query ? { query } : {}),
            page: page + 1,
          },
        }}
        className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
      >
        Next
      </Link>
    </div>
  )
}
