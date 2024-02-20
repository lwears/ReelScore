import type { Metadata } from 'next'
import React from 'react'
import { Roboto } from 'next/font/google'

import './globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    template: '%s | ReelScore',
    default: 'ReelScore',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
}

export const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'block',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx('antialiased dark:text-zinc-200 font-medium')}>
        {children}
      </body>
    </html>
  )
}
