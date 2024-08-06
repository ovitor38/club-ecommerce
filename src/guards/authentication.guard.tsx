import { FunctionComponent, useContext, useEffect } from 'react'
import { ICommonProps } from '../common/interfaces'
import { USerContext } from '../context/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'

const AuthenticationGuard: FunctionComponent<ICommonProps> = ({ children }) => {
  const { isAuthenticated } = useContext(USerContext)

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
