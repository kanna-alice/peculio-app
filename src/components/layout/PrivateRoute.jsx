import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function PrivateRoute({ children }) {
  const { usuario } = useAuth()

  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  return children
}