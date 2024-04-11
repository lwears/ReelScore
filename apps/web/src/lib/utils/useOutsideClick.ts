import { useRef, useEffect } from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void
) => {
  const itemsRef = useRef<T[]>([])

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (
        itemsRef.current.length > 0 &&
        itemsRef.current.every((x) => x !== null) &&
        !itemsRef.current.some((x) => x.contains(e.target as Node))
      ) {
        callback()
      }
    }

    window.addEventListener('click', pageClickEvent)

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [callback])

  return itemsRef
}
