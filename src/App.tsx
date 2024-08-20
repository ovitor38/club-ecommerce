import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.pages'
import LoginPage from './pages/login/login.pages'
import SignUpPage from './pages/sign-up/sign-up.pages'
import { FunctionComponent, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.component'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details'
import Cart from './components/cart/cart.component'
import ChechkoutPage from './pages/checkout/checkout.page'
import AuthenticationGuard from './guards/authentication.guard'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logout } from './store/reducers/user/user.action'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitialing] = useState(true)

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSiginingOut = isAuthenticated && !user

      if (isSiginingOut) {
        dispatch(logout())
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

        dispatch(loginUser(userFromFireStore))

        return setIsInitialing(false)
      }

      return setIsInitialing(false)
    })
  }, [dispatch])

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
        <Route
          path='checkout'
          element={
            <AuthenticationGuard>
              <ChechkoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path='payment-confirmation'
          element={<PaymentConfirmationPage />}
        />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
