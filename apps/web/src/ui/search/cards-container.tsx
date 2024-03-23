import React from 'react'

export default function CardsContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {children}
    </div>
  )
}
