import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { cadastrar } from '../services/authService'
import { useAuth } from '../hooks/useAuth'
import { traduzErroFirebase } from '../utils/erros'

export default function Cadastro() {
  const { usuario } = useAuth()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  if (usuario) {
    return <Navigate to="/" replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    setEnviando(true)

    try {
      await cadastrar(nome.trim(), email, senha)
    } catch (err) {
      setErro(traduzErroFirebase(err.code))
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-emerald-600 text-center">
          Pecúlio 💰
        </h1>
        <p className="text-center text-slate-500">Crie sua conta</p>

        {erro && (
          <p className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">{erro}</p>
        )}

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="password"
          placeholder="Senha (mínimo 6 caracteres)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
          className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-emerald-600 text-white font-semibold p-3 rounded-lg hover:bg-emerald-700 disabled:opacity-50"
        >
          {enviando ? 'Criando conta...' : 'Cadastrar'}
        </button>

        <p className="text-center text-sm text-slate-500">
          Já tem conta?{' '}
          <Link to="/login" className="text-emerald-600 font-semibold">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  )
}