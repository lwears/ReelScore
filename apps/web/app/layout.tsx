import type { Metadata } from 'next'
import React from 'react'

import './globals.css'
import { TrpcProvider } from './trpc/trpc-provider'

export const metadata: Metadata = {
  title: {
    template: '%s | ReelScore',
    default: 'ReelScore',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <TrpcProvider>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </TrpcProvider>
  )
}
