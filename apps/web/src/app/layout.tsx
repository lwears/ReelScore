import { ThemeProvider } from '@web/lib/contexts/theme-provider'
import { TRPCReactProvider } from '@web/lib/utils/trpc/react'
import { Roboto } from 'next/font/google'
import React from 'react'
import { Toaster } from 'sonner'
import '@web/styles/globals.css'

import type { Metadata } from 'next'

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground font-medium antialiased">
        <ThemeProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Toaster position="top-right" expand richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
