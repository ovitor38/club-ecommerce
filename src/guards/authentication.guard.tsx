import { FunctionComponent, useEffect } from 'react'
import { ICommonProps } from '../common/interfaces'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root-reducer'

const AuthenticationGuard: FunctionComponent<ICommonProps> = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: RootState) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Redirecionando para a página de login' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
