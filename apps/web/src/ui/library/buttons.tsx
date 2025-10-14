'use client'

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { api } from '@web/lib/utils/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '../components/button'
// import type { AppRouter } from '@api/server/trpc'

// TODO: Can i apply DRY to this?

// const DeleteMedia = ({
//   id,
//   router,
// }: {
//   id: string
//   router: keyof Pick<AppRouter, 'movieRouter' | 'serieRouter'>
// }) => {
//   const { refresh } = useRouter()
//   const utils = api.useUtils()
//   const deleteMedia = api[router].delete.useMutation({
//     onSuccess: async (m) => {
//       toast.success('Media Removed', { description: m.title })
//       utils[router].list.invalidate()
//       refresh()
//     },
//     onError: (error) => toast.error(error.message),
//   })

//   const data = { id }
//   return (
//     <form action={() => deleteMedia.mutate(data)}>
//       <Button size="card" variant="card" type="submit">
//         <XCircleIcon />
//         Remove
//       </Button>
//     </form>
//   )
// }

export const DeleteMovie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const deleteMovie = api.movie.delete.useMutation({
    onSuccess: async (m) => {
      toast.success('Movie Removed', { description: m.title })
      utils.movie.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
  })
  return (
    <Button
      variant="ghost"
      size="card"
      IconBefore={<XCircleIcon />}
      onClick={() => deleteMovie.mutate({ id })}
    >
      Remove
    </Button>
  )
}

export const DeleteSerie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const deleteSerie = api.series.delete.useMutation({
    onSuccess: async (s) => {
      toast.success('Serie Removed', { description: s.title })
      utils.series.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <Button
      variant="ghost"
      size="card"
      IconBefore={<XCircleIcon />}
      onClick={() => deleteSerie.mutate({ id })}
    >
      Remove
    </Button>
  )
}

export const UpdateMovie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const update = api.movie.update.useMutation({
    onSuccess: async (s) => {
      toast.success('Movie moved to Watched', { description: s.title })
      utils.movie.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <Button
      variant="ghost"
      size="card"
      IconBefore={<CheckCircleIcon />}
      onClick={() => update.mutate({ id, watched: true })}
    >
      Watched !
    </Button>
  )
}
export const UpdateSerie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const update = api.series.update.useMutation({
    onSuccess: async (s) => {
      toast.success('Serie moved to Watched', { description: s.title })
      utils.series.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <Button
      variant="ghost"
      size="card"
      IconBefore={<CheckCircleIcon />}
      onClick={() => update.mutate({ id, watched: true })}
    >
      Watched !
    </Button>
  )
}
