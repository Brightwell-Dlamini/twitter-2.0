// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyABxgqNE50dYsE969g2zfCwIMX3DXc7MeU',
  authDomain: 'twitter-clone-38a41.firebaseapp.com',
  projectId: 'twitter-clone-38a41',
  storageBucket: 'twitter-clone-38a41.appspot.com',
  messagingSenderId: '296323668833',
  appId: '1:296323668833:web:51f8b701ffd7021a514320',
  measurementId: 'G-X8FKSDYMZN',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const storage = getStorage()
const db = getFirestore()

export default app
export { db, storage }
