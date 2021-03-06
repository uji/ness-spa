import firebase from 'firebase/app'
import 'firebase/auth'
import { Authenticator } from '@/types/firebase/authenticator'

const firebaseConfig = {
  apiKey: 'AIzaSyDoxQU1-q6IrXoo9lPHH8wLBGm4dr5BA2w',
  authDomain: 'ness-85856.firebaseapp.com',
  databaseURL: 'https://ness-85856.firebaseio.com',
  projectId: 'ness-85856',
  storageBucket: 'ness-85856.appspot.com',
  messagingSenderId: '410365716960',
  appId: '1:410365716960:web:01fb9a4a9869527b2e2385',
  measurementId: 'G-E34BNZV0JP'
};

firebase.initializeApp(firebaseConfig)
export const authenticator = new Authenticator(firebase.auth())
