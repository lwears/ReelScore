'use client'

import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'
import { ChevronUpIcon, FilmIcon, TvIcon } from '@heroicons/react/20/solid'

import { useOutsideClick } from '@web/lib/utils'
import { Search } from '../search/search'
import type { HeroIcon } from '@web/types'
import { env } from 'apps/web/env'

interface NavItem {
  text: string
  subnav: SubNavItem[]
}

interface SubNavItem {
  text: string
  location: string
  Icon: HeroIcon
}

export const navItems: NavItem[] = [
  {
    text: 'Library',
    subnav: [
      {
        text: 'Movies',
        location: `/library/movies/watched`,
        Icon: FilmIcon,
      },
      {
        text: 'Series',
        location: '/library/series/watchlist',
        Icon: TvIcon,
      },
    ],
  },
  {
    text: 'Browse',
    subnav: [
      {
        text: 'Movies',
        location: '/movies/',
        Icon: FilmIcon,
      },
      {
        text: 'Series',
        location: '/series/',
        Icon: TvIcon,
      },
    ],
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

  const refCallback = (el: HTMLButtonElement, i: number) =>
    (itemsRef.current[i] = el)

  return (
    <ul className="nav-list-ul">
      {navItems.map((item, index) => (
        <li key={index} className="nav-list-item">
          <NavDropdown
            items={item.subnav}
            text={item.text}
            onClick={() => handleClick(item.text)}
            refCallback={(e) => refCallback(e, index)}
            isVisible={activeTab === item.text}
          />
        </li>
      ))}
      <LogoutButton />
    </ul>
  )
}

const LogoutButton = () => (
  <a
    href={`${env.NEXT_PUBLIC_API_URL}/auth/logout`}
    className="text-primary-fg hover:bg-primary-hover flex w-full justify-between whitespace-nowrap rounded-md px-3 py-2"
  >
    Logout
  </a>
)

interface NavDropdownProps {
  text: string
  onClick: () => void
  refCallback: (el: HTMLButtonElement) => void
  items: SubNavItem[]
  isVisible: boolean
}

const NavDropdown = ({
  items,
  isVisible,
  onClick,
  text,
  refCallback,
}: NavDropdownProps) => (
  <>
    <button
      onClick={onClick}
      className="text-primary-fg hover:bg-primary-hover group flex w-full justify-between rounded-md px-3 py-2"
      ref={(el: HTMLButtonElement) => refCallback(el)}
    >
      {text}
      <ChevronUpIcon className="size-5 transition-all group-has-[+.invisible]:rotate-180 md:hidden" />
    </button>
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
  </>
)
