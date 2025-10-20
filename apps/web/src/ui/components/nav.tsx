'use client'

import { ChevronDownIcon, FilmIcon, TvIcon } from '@heroicons/react/20/solid'
import { useOutsideClick } from '@web/lib/utils'
import type { HeroIcon } from '@web/types'
import { env } from 'apps/web/env'
import clsx from 'clsx'
import Link from 'next/link'
import type { RefCallback } from 'react'
import { useState } from 'react'
import { Search } from '../search/search'
import { ThemeToggle } from './theme-toggle'

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
        location: '/library/movies/watched',
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
    <header className="bg-primary flex items-center justify-between px-4 shadow-lg backdrop-blur-sm md:px-6 lg:px-8 border-b border-primary-hover/20">
      {/* Logo/Brand */}
      <Link
        href="/"
        className="flex items-center gap-2.5 hover:opacity-80 transition-all duration-200 flex-shrink-0 group"
      >
        <FilmIcon className="size-8 text-white group-hover:scale-110 transition-transform duration-200" />
        <span className="text-white text-xl font-bold tracking-tight hidden sm:inline">
          ReelScore
        </span>
      </Link>

      {/* Mobile menu toggle */}
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      {/* Navigation */}
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
  const itemsRef = useOutsideClick<HTMLDivElement>(() => setActiveTab(''))

  const handleToggle = (itemText: string) => {
    setActiveTab((prev) => (prev === itemText ? '' : itemText))
  }

  const refCallback: RefCallback<HTMLDivElement> = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <ul className="flex flex-col items-center gap-1 md:flex-row md:gap-1">
      {navItems.map((item, index) => (
        <li key={index} className="relative w-full md:w-auto">
          <NavDropdown
            items={item.subnav}
            text={item.text}
            onToggle={() => handleToggle(item.text)}
            refCallback={refCallback}
            isOpen={activeTab === item.text}
          />
        </li>
      ))}
      <li className="w-full md:w-auto">
        <LogoutButton />
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  )
}

const LogoutButton = () => (
  <a
    href={`${env.NEXT_PUBLIC_API_URL}/auth/logout`}
    className="text-primary-foreground hover:bg-destructive/90 active:bg-destructive flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium transition-all duration-200 whitespace-nowrap w-full md:w-auto text-sm hover:shadow-md hover:-translate-y-0.5"
  >
    Logout
  </a>
)

interface NavDropdownProps {
  text: string
  onToggle: () => void
  refCallback: RefCallback<HTMLDivElement>
  items: SubNavItem[]
  isOpen: boolean
}

const NavDropdown = ({
  items,
  isOpen,
  onToggle,
  text,
  refCallback,
}: NavDropdownProps) => {
  const dropdownId = `dropdown-${text.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div ref={refCallback} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={dropdownId}
        className="text-primary-foreground hover:bg-primary-hover/80 active:bg-primary-hover flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 font-medium transition-all duration-200 whitespace-nowrap text-sm hover:shadow-md hover:-translate-y-0.5"
      >
        <span>{text}</span>
        <ChevronDownIcon
          className={clsx(
            'size-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      <ul
        id={dropdownId}
        role="menu"
        aria-label={`${text} submenu`}
        className={clsx(
          'absolute left-0 z-50 mt-1 min-w-[160px] rounded-lg bg-primary shadow-lg border border-primary-hover/20 overflow-hidden transition-all duration-200 origin-top',
          isOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-0 pointer-events-none'
        )}
      >
        {items.map(({ text: itemText, Icon, location }) => (
          <li key={itemText} role="none">
            <Link
              href={location}
              role="menuitem"
              className="text-primary-foreground hover:bg-primary-hover/80 flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
            >
              <Icon className="size-4" aria-hidden="true" />
              <span>{itemText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
