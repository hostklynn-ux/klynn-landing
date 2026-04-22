import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Solo proteger entorno dev
  if (url.hostname === 'dev.getklynn.com') {
    const auth = request.headers.get('authorization')

    const USER = 'admin-dev'
    const PASS = 'Klynn_secure_dev_@2026'

    if (!auth) {
      return new Response('Auth required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }

    const encoded = auth.split(' ')[1]
    const decoded = atob(encoded)
    const [user, pass] = decoded.split(':')

    if (user !== USER || pass !== PASS) {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  return NextResponse.next()
}