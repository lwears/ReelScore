'use client'

import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'
import GenericImage from '@web/public/1962.jpg'

interface Props {
  alt: string
  src: string
  width: number
  height: number
  fallback?: StaticImageData
  className?: string
}

export const ImageWithFallback = ({
  fallback = GenericImage,
  src,
  ...props
}: Props) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <Image
      onError={() => !error && setError(true)}
      src={!src.length || error ? fallback : src}
      {...props}
    />
  )
}
