import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.style'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-item/cart-item.component'

const Cart: FunctionComponent = () => {
  const {
    isVisible,
    products,
    toogleCart,
    productsTotalPrice,
    totalProductsCount
  } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toogleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {totalProductsCount > 0 && (
          <CartTotal>Total: {productsTotalPrice}</CartTotal>
        )}

        {totalProductsCount === 0 && <p>Seu carrinho está vazio !</p>}

        {totalProductsCount > 0 && (
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para checkout
          </CustomButton>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
