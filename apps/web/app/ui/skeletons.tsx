import CardsContainer from './main/CardsContainer'

// Loading animation from NextJS Dashboard course
export function CardSkeleton() {
  return (
    <div className="shimmer shadow-material-2 relative aspect-[2/3] w-full overflow-hidden rounded-md bg-gray-300" />
  )
}

export const CardsSkeleton = () => (
  <CardsContainer>
    {Array.from({ length: 8 }, (_, i) => (
      <CardSkeleton key={i} />
    ))}
  </CardsContainer>
)
