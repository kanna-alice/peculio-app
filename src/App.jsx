import { auth, db } from './services/firebase'

console.log('Firebase conectado:', auth, db)
export default function App() {
  return (
    <h1 className="text-3xl font-bold text-pink-600 p-8">
      Pecúlio 💰
    </h1>
  )
}
