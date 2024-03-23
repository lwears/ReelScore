'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { api } from '@web/lib/utils/trpc/react'
import { Button } from '../components/button'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
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
  const deleteMovie = api.movieRouter.delete.useMutation({
    onSuccess: async (m) => {
      toast.success('Movie Removed', { description: m.title })
      utils.movieRouter.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
  })
  return (
    <form action={() => deleteMovie.mutate({ id })}>
      <Button size="card" variant="card" type="submit">
        <XCircleIcon />
        Remove
      </Button>
    </form>
  )
}

export const DeleteSerie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const deleteSerie = api.serieRouter.delete.useMutation({
    onSuccess: async (s) => {
      toast.success('Serie Removed', { description: s.title })
      utils.serieRouter.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <form action={() => deleteSerie.mutate({ id })}>
      <Button size="card" variant="card" type="submit">
        <XCircleIcon />
        Remove
      </Button>
    </form>
  )
}

export const UpdateMovie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const updateSerie = api.movieRouter.update.useMutation({
    onSuccess: async (s) => {
      toast.success('Movie moved to Watched', { description: s.title })
      utils.movieRouter.list.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <form
      className="w-full"
      action={() => updateSerie.mutate({ id, watched: true })}
    >
      <Button size="card" variant="card" type="submit">
        <CheckCircleIcon />
        Watched !
      </Button>
    </form>
  )
}
