import Link from 'next/link'

import { Button } from '@web/ui/components/button'
import { GithubSVG } from '@web/ui/svg/github'
import { GoogleSVG } from '@web/ui/svg/google'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <main className="bg-background border-primary flex min-h-screen flex-col items-center justify-center gap-8 border p-2">
      <p className="text-primary text-9xl font-semibold">ReelScore</p>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          asChild
          variant="primary"
          size="md"
          className="bg-black font-medium hover:bg-gray-700"
        >
          <Link href={'http://localhost:4000/auth/github/login'}>
            <GithubSVG />
            Sign in with Github
          </Link>
        </Button>
        <Button asChild variant="primary" size="md" className="font-medium">
          <Link href={'http://localhost:4000/auth/google/login'}>
            <GoogleSVG />
            Sign in with Google
          </Link>
        </Button>
      </div>
    </main>
  )
}
