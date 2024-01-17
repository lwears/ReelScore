'use client'
// TODO: DRY
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Tabs() {
  const pathname = usePathname()

  return (
    <ul className="flex justify-evenly gap-2 rounded-full p-1 dark:bg-zinc-800">
      <Link
        href={`/movies/watchlist`}
        className={` flex w-full cursor-pointer items-center justify-center rounded-3xl p-1 ${
          pathname.includes('watchlist') && 'bg-zinc-700'
        } `}
      >
        <li>
          <p className="text-sm text-slate-200">Watchlist</p>
        </li>
      </Link>
      <Link
        href={`/movies/watched`}
        className={` flex w-full cursor-pointer items-center justify-center rounded-3xl p-1 ${
          pathname.includes('watched') && 'bg-zinc-700'
        } `}
      >
        <li>
          <p className="text-sm text-slate-200">Watched</p>
        </li>
      </Link>
    </ul>
  )
}
