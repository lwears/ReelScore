'use client'

import { toast } from 'sonner'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

import { api } from '@web/lib/utils/trpc/react'
import { Button } from '../components/Button'

// TODO: Can i apply DRY to this?
export const DeleteMovie = ({ id }: { id: string }) => {
  const router = useRouter()
  const utils = api.useUtils()
  const deleteMovie = api.movieRouter.delete.useMutation({
    onSuccess: async (m) => {
      toast.success('Movie Removed', { description: m.title })
      utils.movieRouter.invalidate()
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
  })
  return (
    <form action={() => deleteMovie.mutateAsync({ id })}>
      <Button size="card" variant="card" type="submit">
        <TrashIcon />
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
      utils.movieRouter.invalidate()
      router.refresh()
    },
    onError: (error) => toast(error.message),
  })
  return (
    <form action={() => deleteSerie.mutateAsync({ id })}>
      <Button size="card" variant="card" type="submit">
        <TrashIcon />
        Remove
      </Button>
    </form>
  )
}
