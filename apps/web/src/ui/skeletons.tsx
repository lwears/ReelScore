import CardsContainer from './components/CardsContainer'

// Loading animation from NextJS Dashboard course
export function CardSkeleton() {
  return (
    <div className="shimmer shadow-material-2 relative aspect-[2/3] w-full overflow-hidden rounded-md bg-gray-300" />
  )
}

export const CardsSkeleton = ({ length = 8 }: { length?: number }) => (
  <CardsContainer>
    {Array.from({ length }, (_, i) => (
      <CardSkeleton key={i} />
    ))}
  </CardsContainer>
)
