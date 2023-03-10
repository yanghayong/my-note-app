import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDMWFi6Dz7sgf7JcSSuFP9k-p_HitVgQqE',
  authDomain: 'yarn-my-note.firebaseapp.com',
  projectId: 'yarn-my-note',
  storageBucket: 'yarn-my-note.appspot.com',
  messagingSenderId: '642398438490',
  appId: '1:642398438490:web:9f15d59f5e75dc16334463',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
