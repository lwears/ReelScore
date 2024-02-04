'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useDebounce } from '@web/app/utils/'
import { useRouter, useSearchParams } from 'next/navigation'
import { type } from 'os'

function Search() {
  const searchParams = useSearchParams()

  const search = searchParams.get('query')
  const initialRender = useRef(true)

  const [text, setText] = useState(search)

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
  }, [query])

  return (
    <search className="flex flex-row items-center justify-center text-gray-600 px-2 py-3 border-b-[1px] border-zinc-600 md:border-0 ">
      <input
        className="border-2 border-gray-300 bg-white px-5 pr-16 rounded-full text-sm focus:outline-none md:h-8 h-10"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      />
      <MagnifyingGlassIcon className="w-5 h-5 text-zinc-500 relative right-10" />
    </search>
  )
}

export default Search
