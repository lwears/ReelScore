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
    <search className="flex flex-row items-center justify-center px-2 py-3 flex-shrink-0 md:flex-shrink min-w-0 md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]">
      <input
        className="bg-background/95 text-foreground placeholder:text-muted-foreground focus:border-primary-hover border-border h-10 rounded-full border-2 px-5 pr-11 text-sm outline-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:shadow-lg focus:scale-[1.02] w-full backdrop-blur-sm"
        type="search"
        name="search"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="relative right-9 size-5 text-muted-foreground pointer-events-none flex-shrink-0 transition-colors duration-200" />
    </search>
  )
}
