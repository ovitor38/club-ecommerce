import { FunctionComponent } from 'react'
import Header from '../../components/header/header.component'
import Checkout from '../../components/checkout/checkout.component'

interface ChechkoutPageProps {}

const ChechkoutPage: FunctionComponent<ChechkoutPageProps> = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  )
}

export default ChechkoutPage
