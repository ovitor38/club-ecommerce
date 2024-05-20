import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPage from './pages/sign-up/sign-up.pages'
import { useContext } from 'react'
import { USerContext } from './context/user.context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(USerContext)

  onAuthStateChanged(auth, async (user) => {
    const isSiginingOut = isAuthenticated && !user

    if (isSiginingOut) {
      return logoutUser()
    }

    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const querySnaphot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFireStore = querySnaphot.docs[0]?.data()

      return loginUser(userFromFireStore as any)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
