import { BsCart3 } from 'react-icons/bs'

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.style'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { USerContext } from '../../context/user.context'
import { auth } from '../../config/firebase.config'
import { signOut } from 'firebase/auth'
import { CartContext } from '../../context/cart.context'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(USerContext)
  const { toogleCart } = useContext(CartContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExplorerClick = () => {
    navigate('explore')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>Club Clothing</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExplorerClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={toogleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
