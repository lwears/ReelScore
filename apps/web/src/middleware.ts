import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { TRPCClientError } from '@trpc/client'
import { api } from './lib/utils/trpc/server'

// interface User {
//   id: string
//   googleId: string
//   email: string
//   name: string
// }

// interface ApiResponse {
//   result: {
//     data: {
//       json: User
//     }
//   }
// }

//Define the return type of the fetchUser function
//change to standard route
// const fetchUser = (req: NextRequest): Promise<User | null> =>
//   fetch('http://localhost:4000/trpc/userRouter.getCurrentUser', {
//     headers: Object.fromEntries(req.headers),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }
//       return response.json() as Promise<ApiResponse>
//     })
//     .then(({ result }) => result.data.json)
//     .catch((error) => {
//       console.error('Error fetching user:', error)
//       return null // Return null or handle the error in an appropriate way
//     })

// export async function middleware(request: NextRequest) {
//   console.log('in middleware')
//   const user = await fetchUser(request)
//   if (!user) return NextResponse.redirect(new URL('/login', request.url))
//   return NextResponse.next()
// }

export async function middleware(request: NextRequest) {
  return api.userRouter.getCurrentUser
    .query(undefined, {
      context: {
        headersOverride: Object.fromEntries(request.headers),
      },
    })
    .then(() => NextResponse.next())
    .catch((error) => {
      if (
        error instanceof TRPCClientError &&
        error.data.code === 'UNAUTHORIZED'
      ) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
      return NextResponse.next()
    })
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|login|favicon.ico|robots.txt|images|$).*)',
  ],
}
