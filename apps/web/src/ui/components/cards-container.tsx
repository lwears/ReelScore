import React from 'react'

export default function CardsContainer({
  children,
}: {
  children: React.ReactNode
}) {
  //Testing Grid auto fill
  return (
    <div className="grid-cols-auto-fill-100 grid w-full items-center justify-center gap-4">
      {/* // <div className="xs:grid-cols-2 grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"> */}
      {children}
    </div>
  )
}
