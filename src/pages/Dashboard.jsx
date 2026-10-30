import { useAuth } from '../hooks/useAuth'
import { sair } from '../services/authService'

export default function Dashboard() {
  const { usuario } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-emerald-600">Pecúlio 💰</h1>
      <p className="mt-2 text-slate-600">
        Olá, {usuario.displayName || usuario.email}!
      </p>

      <button
        onClick={sair}
        className="mt-6 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
      >
        Sair
      </button>
    </div>
  )
}