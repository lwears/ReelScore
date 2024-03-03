import { TrashIcon } from '@heroicons/react/24/outline'
import { Button } from '../components/Button'

export function DeleteMedia({
  id,
  action,
}: {
  id: string
  action: (id: string) => Promise<void>
}) {
  const deleteMedia = action.bind(null, id)
  return (
    <form action={deleteMedia}>
      <Button
        startIcon={<TrashIcon />}
        size="card"
        variant="card"
        type="submit"
      >
        Remove
      </Button>
    </form>
  )
}
