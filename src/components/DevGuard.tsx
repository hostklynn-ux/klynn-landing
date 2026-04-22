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
        // ✅ mostrar contenido
        document.documentElement.style.display = 'block'
      } else {
        // ❌ romper completamente
        document.documentElement.innerHTML = ''
      }
    }
  }, [])

  return null
}