import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from './firebase'

export async function cadastrar(nome, email, senha) {
  const credencial = await createUserWithEmailAndPassword(auth, email, senha)
  await updateProfile(credencial.user, { displayName: nome })
  return credencial.user
}

export function entrar(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha)
}

export function sair() {
  return signOut(auth)
}