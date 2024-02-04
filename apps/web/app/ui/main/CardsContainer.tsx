import React from 'react'

export default function CardsContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
      {/* <div className="grid grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 border-2 border-red-600"> */}
      {children}
    </div>
  )
}
