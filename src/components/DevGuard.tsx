'use client'

import { useEffect } from 'react'

export default function DevGuard() {
  useEffect(() => {
    const hostname = window.location.hostname

    const isDev =
      hostname === 'dev.getklynn.com' ||
      hostname.includes('pages.dev')

    if (isDev) {
      const password = window.prompt('Contraseña')

      if (password === 'klynn-dev-2026') {
        document.body.style.display = 'block'
      } else {
        document.documentElement.innerHTML = ''
      }
    } else {
      document.body.style.display = 'block'
    }
  }, [])

  return null
}