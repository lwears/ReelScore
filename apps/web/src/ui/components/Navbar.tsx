'use client'

import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'
import { ChevronUpIcon, FilmIcon, TvIcon } from '@heroicons/react/20/solid'

import { useOutsideClick } from '@web/lib/utils'
import { Search } from '../search/search'

import type { HeroIcon } from '@web/types'

const navItems: NavItem[] = [
  {
    text: 'Library',
    subnav: [
      {
        text: 'Movies',
        location: 'http://localhost:3000/library/movies/watched',
        Icon: FilmIcon,
      },
      {
        text: 'Series',
        location: 'http://localhost:3000/library/series/watchlist',
        Icon: TvIcon,
      },
    ],
  },
  {
    text: 'Browse',
    subnav: [
      {
        text: 'Movies',
        location: 'http://localhost:3000/movies/',
        Icon: FilmIcon,
      },
      {
        text: 'Series',
        location: 'http://localhost:3000/series/',
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
    <header className="bg-primary flex items-center justify-between">
      <FilmIcon className="m-4 size-7" />

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
    <ul className="nav-list-ul">
      {navItems.map((item, index) => (
        <li key={index} className="nav-list-item">
          {item.subnav ? (
            <>
              <NavButton
                text={item.text}
                onClick={() => handleClick(item.text)}
                refCallback={(el: HTMLButtonElement) =>
                  (itemsRef.current[index] = el)
                }
              />
              <Dropdown
                items={item.subnav}
                isVisible={activeTab === item.text}
              />
            </>
          ) : (
            <LogoutButton text={item.text} />
          )}
        </li>
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
  refCallback: (el: HTMLButtonElement) => void
}

const NavButton = ({ text, onClick, refCallback }: NavButtonProps) => (
  <button
    onClick={onClick}
    className="text-primary-fg hover:bg-primary-hover group flex w-full justify-between rounded-md px-3 py-2"
    ref={(el: HTMLButtonElement) => refCallback(el)}
  >
    {text}
    <ChevronUpIcon className="size-5 transition-all group-has-[+.invisible]:rotate-180 md:hidden" />
  </button>
)

const LogoutButton = ({ text }: { text: string }) => (
  <a
    href={'http://localhost:4000/auth/logout'}
    className="text-primary-fg hover:bg-primary-hover flex w-full justify-between whitespace-nowrap rounded-md px-3 py-2"
  >
    {text}
  </a>
)

interface DropdownProps {
  items: SubNavItem[]
  isVisible: boolean
}

const Dropdown = ({ items, isVisible }: DropdownProps) => (
  <ul
    className={clsx(
      'nav-list-dropdown peer-[invisible]:rotate-45',
      isVisible ? 'max-h-40 opacity-100' : 'invisible max-h-0 opacity-0'
    )}
  >
    {items.map(({ text, Icon, location }) => (
      <li className="nav-list-dropdown-item" key={text}>
        <Link
          href={location}
          className="hover:bg-primary-hover flex size-full flex-row items-center gap-3 rounded px-3 py-2"
        >
          <Icon className="hidden md:block md:size-5" />
          {text}
        </Link>
      </li>
    ))}
  </ul>
)
