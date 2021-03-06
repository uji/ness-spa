import firebase from "firebase/app"
import 'firebase/auth'

export interface IAuthenticator {
  isSignIn: () => boolean
  signInWithEmailPassword: (email: string, password: string) => void
  signOut: () => void
}

export class Authenticator implements IAuthenticator{
  private firebaseAuth: firebase.auth.Auth
  constructor(auth: firebase.auth.Auth) {
    this.firebaseAuth = auth
  }

  isSignIn ():boolean {
    const idToken = localStorage.getItem('idToken')
    return idToken !== null
  }
  signInWithEmailPassword = async(email: string, password: string) => {
    const result = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    if (!result.user) return
    const idToken = await result.user.getIdToken()
    localStorage.setItem('idToken', idToken)
  }
  signOut = async() => {
    await this.firebaseAuth.signOut()
    localStorage.removeItem('idToken')
  }
}
