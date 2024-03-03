'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Tabs() {
  const pathname = usePathname()
  return (
    <ul className="bg-primary-bg flex w-52 justify-evenly gap-2 rounded-full p-1">
      {['watched', 'watchlist'].map((tab) => (
        <Link
          key={tab}
          href={`${tab}`}
          className={clsx(
            'flex w-full cursor-pointer items-center justify-center rounded-3xl px-2 py-1',
            pathname.includes(tab) && 'bg-primary-bg-hover'
          )}
        >
          <li>
            <p className="text-sm capitalize">{tab}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
