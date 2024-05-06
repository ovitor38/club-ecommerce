import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBTZJ91HKOLcPQ9nGXWfe1hvenX6zsAgGQ',
  authDomain: 'club-ecommerce-5af54.firebaseapp.com',
  projectId: 'club-ecommerce-5af54',
  storageBucket: 'club-ecommerce-5af54.appspot.com',
  messagingSenderId: '207810338885',
  appId: '1:207810338885:web:edd0d21251d4d734f1c32c'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
