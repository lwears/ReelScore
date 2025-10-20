import CardsContainer from './cards-container'

export const CardSkeleton = () => {
  return (
    <div className="shimmer shadow-material-2 bg-gray-100 relative aspect-[2/3] w-full overflow-hidden rounded-md" />
  )
}

export const CardsSkeleton = ({ length = 21 }: { length?: number }) => (
  <CardsContainer>
    {Array.from({ length }, (_, i) => (
      <CardSkeleton key={i} />
    ))}
  </CardsContainer>
)

export const PaginationSkeleton = () => (
  <div className="flex w-full justify-center gap-2">
    <div className="bg-gray-100 border-gray-300 flex h-12 w-full items-center justify-center rounded-md border sm:w-12" />
    <div className="hidden -space-x-px sm:flex sm:w-fit">
      <div className="shimmer bg-gray-100 border-gray-300 relative h-12 w-24 rounded-md border" />
    </div>
    <div className="bg-gray-100 border-gray-300 flex h-12 w-full items-center justify-center rounded-md border sm:w-12" />
  </div>
)

export const MediaDisplaySkeleton = () => (
  <div className="flex w-full flex-col items-center justify-center gap-3">
    <PaginationSkeleton />
    <CardsSkeleton />
  </div>
)
