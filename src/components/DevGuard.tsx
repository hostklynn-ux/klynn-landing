'use client'

import { useEffect, useState } from 'react'

export default function DevGuard({ children }: { children?: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (window.location.hostname === 'dev.getklynn.com') {
      const password = window.prompt('Ingrese contraseña')

      if (password === 'Klynn_secure_dev_@2026') {
        setAuthorized(true)
      } else {
        setAuthorized(false)
      }
    } else {
      setAuthorized(true)
    }

    setChecked(true)
  }, [])

  // 🔒 bloquea TODO mientras valida
  if (!checked) {
    return (
      <div style={{
        height: '100vh',
        background: '#000'
      }} />
    )
  }

  // ❌ acceso denegado
  if (!authorized) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#fff',
        fontSize: '20px'
      }}>
        Acceso denegado
      </div>
    )
  }

  // ✅ acceso permitido
  return <>{children}</>
}