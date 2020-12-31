import firebase from "firebase/app"
import 'firebase/auth'

export const isSignedIn = ():boolean => {
  const idToken = localStorage.getItem('idToken')
  return idToken !== null
}

export const signInWithEmailPassword = async(auth: firebase.auth.Auth, email: string, password: string) => {
  const result = await auth.signInWithEmailAndPassword(email, password)
  if (!result.user) return
  const idToken = await result.user.getIdToken()
  localStorage.setItem('idToken', idToken)
}

export const signOut = async(auth: firebase.auth.Auth) => {
  await auth.signOut()
  localStorage.removeItem('idToken')
}
