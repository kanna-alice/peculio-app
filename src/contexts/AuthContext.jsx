import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, (user) => {
      setUsuario(user)
      setCarregando(false)
    })
    return cancelar
  }, [])

  return (
    <AuthContext.Provider value={{ usuario, carregando }}>
      {!carregando && children}
    </AuthContext.Provider>
  )
}