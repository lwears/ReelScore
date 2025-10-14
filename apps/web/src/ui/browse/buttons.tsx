'use client'

import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { toast } from 'sonner'

import { api } from '@web/lib/utils/trpc/react'
import { Button } from '../components/button'
import { getReadableError, isKnownErrorCode } from '@web/lib/utils/helpers'

import type { ButtonProps } from '../components/button'
import type { RouterInputs } from '@api/server/router'
import type { ErrorCode } from '@web/types'

interface AddMovieProps {
  movie: RouterInputs['movie']['create']
  watched: boolean
  onSuccess?: () => void
  onError?: (e: string) => void
  buttonProps: ButtonProps
  text: string
}

export const AddMovie = ({
  movie,
  watched,
  onSuccess,
  onError,
  buttonProps,
  text,
}: AddMovieProps) => {
  const utils = api.useUtils()

  const addMovie = api.movie.create.useMutation({
    onSuccess: (m) => {
      toast.success('Movie Added', { description: m.title })
      void utils.movie.invalidate()
      onSuccess && onSuccess()
    },
    onError: (error) => {
      const errorCode = error.data?.code as ErrorCode | undefined
      if (errorCode && isKnownErrorCode(errorCode)) {
        toast.error(getReadableError(errorCode, 'Movie'))
      } else {
        // Handle unexpected errors
        toast.error(error.message)
      }
      onError && onError(error.message)
    },
  })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addMovie.mutate({ ...movie, watched })
  }

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {text}
    </Button>
  )
}

// export const AddMovie = ({
//   movie,
//   watched,
// }: {
//   movie: RouterInputs['movieRouter']['create']
//   watched: boolean
// }) => {
//   const utils = api.useUtils()
//   const addMovie = api.movieRouter.create.useMutation({
//     onSuccess: (m) => {
//       toast.success('Movie Added', { description: m.title })
//       void utils.movieRouter.invalidate()
//     },
//     onError: (error) => {
//       const errorCode = error.data?.code as ErrorCode | undefined
//       if (errorCode && isKnownErrorCode(errorCode)) {
//         return toast.error(getReadableError(errorCode, 'Movie'))
//       }
//       // TODO : Handle unexpected errors
//       toast.error(error.message)
//     },
//   })

//   const text = watched ? 'Seen' : 'Watchlist'
//   const Icon = watched ? CheckCircleIcon : PlusCircleIcon

//   return (
//     <Button
//       size="card"
//       variant="card"
//       onClick={(e) => {
//         e.preventDefault()
//         addMovie.mutate({ ...movie, watched })
//       }}
//     >
//       {/* TODO Fix Icon */}
//       <Icon />
//       {text}
//     </Button>
//   )
// }

export const AddSerie = ({
  serie,
  watched,
}: {
  serie: RouterInputs['series']['create']
  watched: boolean
}) => {
  const utils = api.useUtils()
  const addSerie = api.series.create.useMutation({
    onSuccess: (m) => {
      toast.success('Serie Added', { description: m.title })
      void utils.series.invalidate()
    },
    onError: (error) => {
      const errorCode = error.data?.code as ErrorCode | undefined
      if (errorCode && isKnownErrorCode(errorCode)) {
        return toast.error(getReadableError(errorCode, 'Movie'))
      }
      toast.error(error.message)
    },
  })

  const text = watched ? 'Seen' : 'Watchlist'
  const Icon = watched ? CheckCircleIcon : PlusCircleIcon

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addSerie.mutate({ ...serie, watched })
  }

  return (
    <Button onClick={handleClick} IconBefore={<Icon />}>
      {text}
    </Button>
  )
}
