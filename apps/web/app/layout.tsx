import type { Metadata } from 'next'
import './globals.css'
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
