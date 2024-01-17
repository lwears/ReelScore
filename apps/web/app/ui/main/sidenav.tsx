import {
  FilmIcon,
  MagnifyingGlassIcon,
  TvIcon,
  VideoCameraIcon,
  HomeIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/20/solid'
import NavItem from './navitem'

const navItems = [
  { text: 'Home', Icon: HomeIcon, location: 'http://localhost:3000/' },
  {
    text: 'Movies',
    Icon: VideoCameraIcon,
    location: 'http://localhost:3000/movies/watched',
  },
  {
    text: 'TV Series',
    Icon: TvIcon,
    location: 'http://localhost:3000/tv-series/watched',
  },
  {
    text: 'Search',
    Icon: MagnifyingGlassIcon,
    location: 'http://localhost:3000/search',
  },
  {
    text: 'Log Out',
    Icon: ArrowRightStartOnRectangleIcon,
    location: 'http://localhost:4000/auth/logout',
  },
]

export default function SideNav() {
  return (
    <div className="flex w-full flex-col gap-2 bg-slate-200 bg-clip-border py-2 text-gray-700 shadow-xl md:basis-1/6 dark:bg-zinc-800">
      <div className="flex flex-row items-center justify-center gap-2">
        <FilmIcon className="h-5 w-5 text-slate-200" />
        <h5 className="text-center font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased dark:text-gray-100">
          ReelScore
        </h5>
      </div>
      <nav className="flex flex-row justify-evenly font-sans text-base font-normal text-slate-200 md:m-1 md:flex-col md:justify-center">
        {navItems.map((i) => (
          <NavItem {...i} key={i.text} />
        ))}
      </nav>
    </div>
  )
}
