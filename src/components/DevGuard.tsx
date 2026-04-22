'use client'

import { useEffect } from 'react'

export default function DevGuard() {
  useEffect(() => {
    if (window.location.hostname === 'dev.getklynn.com') {
      const password = prompt('Ingrese contraseña')

      if (password !== 'Klynn_secure_dev_@2026') {
        document.body.innerHTML = 'https://google.com'
      }
    }
  }, [])

  return null
}