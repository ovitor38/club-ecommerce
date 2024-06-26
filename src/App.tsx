import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPage from './pages/sign-up/sign-up.pages'
import { FunctionComponent, useContext, useState } from 'react'
import { USerContext } from './context/user.context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.component'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitialing] = useState(true)

  const { isAuthenticated, loginUser, logoutUser } = useContext(USerContext)

  onAuthStateChanged(auth, async (user) => {
    const isSiginingOut = isAuthenticated && !user

    if (isSiginingOut) {
      logoutUser()
      return setIsInitialing(false)
    }

    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const querySnaphot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFireStore = querySnaphot.docs[0]?.data()

      loginUser(userFromFireStore)
      return setIsInitialing(false)
    }

    return setIsInitialing(false)
  })

  if (isInitializing) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='explore' element={<ExplorePage />} />
        <Route path='category/:id' element={<CategoryDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
