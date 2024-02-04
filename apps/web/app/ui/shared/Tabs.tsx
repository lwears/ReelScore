'use client'

import { uppercaseFirst } from '@web/app/utils/helpers'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Tabs() {
  const pathname = usePathname()
  return (
    <ul className="flex justify-evenly gap-2 rounded-full p-1 dark:bg-zinc-800 w-52">
      {['watched', 'watchlist'].map((tab) => (
        <Link
          key={tab}
          href={`${tab}`}
          className={clsx(
            'flex w-full cursor-pointer items-center justify-center rounded-3xl px-2 py-1',
            pathname.includes(tab) && 'bg-zinc-700',
          )}
        >
          <li>
            <p className="text-sm text-slate-200">{uppercaseFirst(tab)}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
