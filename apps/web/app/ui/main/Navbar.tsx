'use client'
import { ChevronUpIcon, FilmIcon, TvIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Search from './Search'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { HeroIcon } from '@web/app/types'

const navItems: NavItem[] = [
  {
    text: 'Library',
    subnav: [
      {
        text: 'Movies',
        location: 'http://localhost:3000/library/movies',
        Icon: FilmIcon,
      },
      {
        text: 'Series',
        location: 'http://localhost:3000/library/series',
        Icon: TvIcon,
      },
    ],
  },
  {
    text: 'Browse',
    subnav: [
      {
        text: 'Movies2',
        location: 'http://localhost:3000/browse/movies',
        Icon: FilmIcon,
      },
      {
        text: 'Series2',
        location: 'http://localhost:3000/browse/series',
        Icon: TvIcon,
      },
    ],
  },
  {
    text: 'Log Out',
    location: 'http://localhost:4000/auth/logout',
  },
]

export default function NavBar() {
  return (
    <header className="flex items-center justify-between dark:bg-zinc-800">
      <FilmIcon className="h-7 w-7 text-slate-200 m-2" />

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <Search />
        <Navigation navItems={navItems} />
      </nav>
    </header>
  )
}

interface NavigationProps {
  navItems: NavItem[]
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const [activeTab, setActiveTab] = useState('')
  const itemsRef = useOutsideClick('', setActiveTab)

  const handleClick = (itemText: string) => {
    setActiveTab((prev) => (prev === itemText ? '' : itemText))
  }

  return (
    <ul className="text-slate-200 flex flex-col md:flex-row md:gap-2 items-center md:h-full">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="w-full h-full relative px-2 py-3 md:p-0 md:flex md:items-center border-b-[1px] border-zinc-600 md:border-0 last:border-0"
        >
          {item.subnav ? (
            <>
              <NavButton
                text={item.text}
                onClick={() => handleClick(item.text)}
                refCallback={(el) => (itemsRef.current[index] = el)}
              />
              <Dropdown
                items={item.subnav}
                isVisible={activeTab === item.text}
              />
            </>
          ) : (
            <LogoutButton text={item.text} />
          )}
        </div>
      ))}
    </ul>
  )
}

interface NavItem {
  text: string
  location?: string
  subnav?: SubNavItem[]
}

interface SubNavItem {
  text: string
  location: string
  Icon: HeroIcon
}

interface NavButtonProps {
  text: string
  onClick: () => void
  refCallback: (el: HTMLButtonElement | null) => void
}

const NavButton: React.FC<NavButtonProps> = ({
  text,
  onClick,
  refCallback,
}) => (
  <button
    onClick={onClick}
    className="flex justify-between rounded-md py-2 px-3 text-base text-slate-200 hover:bg-zinc-700 w-full group"
    ref={(el) => refCallback(el)}
  >
    {text}
    <ChevronUpIcon className="w-5 h-5 md:hidden group-has-[+.invisible]:rotate-180 transition-all transform" />
  </button>
)

const LogoutButton = ({ text }: { text: string }) => (
  <button
    onClick={() => console.log('logout')}
    className="flex justify-between rounded-md py-2 px-3 text-base text-slate-200 hover:bg-zinc-700 w-full whitespace-nowrap"
  >
    {text}
  </button>
)

interface DropdownProps {
  items: SubNavItem[]
  isVisible: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ items, isVisible }) => (
  <ul
    className={clsx(
      'nav-list-dropdown peer-[invisible]:rotate-45',
      isVisible ? 'max-h-40 opacity-100' : 'max-h-0 invisible opacity-0',
    )}
  >
    {items.map(({ text, Icon, location }) => (
      <li key={text} className="">
        <Link
          href={location}
          className="text-slate-200 h-full w-full py-2 px-3 flex flex-row gap-3 items-center dark:hover:bg-zinc-700 rounded"
        >
          <Icon className="md:w-5 md:h-5 hidden md:block" />
          {text}
        </Link>
      </li>
    ))}
  </ul>
)

const useOutsideClick = <T,>(
  initialState: T,
  stateUpdater: (newState: T) => void,
) => {
  const itemsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (
        itemsRef.current.every((x) => x !== null) &&
        !itemsRef.current.some((x) => x.contains(e.target as Node))
      ) {
        stateUpdater(initialState)
      }
    }

    if (stateUpdater !== initialState) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [initialState, stateUpdater])

  return itemsRef
}
