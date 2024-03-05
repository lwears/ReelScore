import { useRef, useEffect } from 'react'

export const useOutsideClick = <T>(
  initialState: T,
  stateUpdater: (newState: T) => void
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
