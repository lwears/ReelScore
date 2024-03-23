'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export const Search = () => {
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((s: string) => {
    const params = new URLSearchParams(searchParams)
    s ? params.set('query', s) : params.delete('query')
    params.delete('page')
    push(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <search className="flex flex-row items-center justify-center px-2 py-3 text-gray-600 ">
      <input
        className=" bg-background focus:border-border border-rhino-600 h-10 rounded-full border-2 px-5 pr-16 text-sm outline-none focus:outline-none md:h-8"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="relative right-10 size-5 text-gray-600" />
    </search>
  )
}
