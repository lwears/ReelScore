import { Button } from '@web/ui/components/button'
import { GithubSVG } from '@web/ui/svg/github'
import { GoogleSVG } from '@web/ui/svg/google'
import { env } from 'apps/web/env'
import type { Metadata } from 'next'
import Link from 'next/link'

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
          IconBefore={<GithubSVG />}
        >
          <Link href={`${env.NEXT_PUBLIC_API_URL}/auth/github/login`}>
            Sign in with Github
          </Link>
        </Button>
        <Button
          asChild
          variant="primary"
          size="md"
          className="font-medium"
          IconBefore={<GoogleSVG />}
        >
          <Link href={`${env.NEXT_PUBLIC_API_URL}/auth/google/login`}>
            Sign in with Google
          </Link>
        </Button>
      </div>
    </main>
  )
}
