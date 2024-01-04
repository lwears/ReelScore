import { FilmIcon, MagnifyingGlassIcon, TvIcon, PowerIcon } from '@heroicons/react/20/solid'
import NavItem from './navitem'

const navItems = [
  { text: 'Movies', Icon: FilmIcon, location: 'http://localhost:3000/dashboard/movies' },
  { text: 'TV Series', Icon: TvIcon, location: 'http://localhost:3000/dashboard/tv-series' },
  { text: 'Search', Icon: MagnifyingGlassIcon, location: 'http://localhost:3000/dashboard/search' },
  { text: 'Log Out', Icon: PowerIcon, location: 'http://localhost:4000/auth/logout' },
]

export default function SideNav() {
  return (
    <div className="flex h-full w-full max-w-[20rem] flex-col bg-slate-200 bg-clip-border p-4 text-gray-700 shadow-xl dark:bg-slate-800">
      <div className="mb-2 p-4">
        <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased dark:text-gray-100">
          ReelScore
        </h5>
      </div>
      <nav className="flex  flex-col gap-1 p-2 font-sans text-base font-normal text-slate-200">
        {navItems.map((i) => (
          <NavItem {...i} key={i.text} />
        ))}
      </nav>
    </div>
  )
}
