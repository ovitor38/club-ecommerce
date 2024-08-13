import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../../components/header/header.component'
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.style'
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineHome
} from 'react-icons/ai'
import Colors from '../../theme/theme.colors'
import CustomButton from '../../components/custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context'

const PaymentConfirmationPage: FunctionComponent = () => {
  const [searchParams] = useSearchParams()
  const { clearCart } = useContext(CartContext)

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      clearCart()
    }
  })

  const navigate = useNavigate()
  const handleGoToHomePageClick = (): void => {
    navigate('/')
  }

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineClockCircle size={120} color={Colors.error} />
              <p>Ocorreu um erro ao finalizar sua compra</p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}
          >
            Ir para página inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
