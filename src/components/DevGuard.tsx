'use client'

import { useEffect } from 'react'

export default function DevGuard() {
  useEffect(() => {
    if (window.location.hostname === 'dev.getklynn.com') {
      const password = window.prompt('Contraseña')

      if (password !== 'klynn-dev-2026') {
        // 💣 BORRA TODO el documento
        document.documentElement.innerHTML = ''

        // 💣 evita que React vuelva a renderizar
        throw new Error('Access blocked')
      }
    }
  }, [])

  return null
}