'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { useDebounce } from '@web/lib/utils'

export const Search = () => {
  const searchParams = useSearchParams()
  const path = usePathname()

  const search = searchParams.get('query')
  const initialRender = useRef(true)

  const [text, setText] = useState<string | null>(null)

  const query = useDebounce(text, 750)
  const router = useRouter()

  useEffect(() => {
    setText(search)
  }, [search])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (query) {
      router.push(`/search?query=${query}`)
    }
  }, [query, router])

  return (
    <search className="flex flex-row items-center justify-center px-2 py-3 text-gray-600 ">
      <input
        className="border-big-stone-500 h-10 rounded-full border-2 bg-white px-5 pr-16 text-sm focus:outline-none md:h-8"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
        value={text || ''}
      />
      <MagnifyingGlassIcon className="relative right-10 size-5 text-gray-600" />
    </search>
  )
}
