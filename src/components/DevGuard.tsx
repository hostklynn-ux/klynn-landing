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

      if (password !== 'klynn-dev-2026') {
        // 💣 borra TODO el contenido
        document.documentElement.innerHTML = ''
        throw new Error('Access blocked')
      }
    }
  }, [])

  return null
}