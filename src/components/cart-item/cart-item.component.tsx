import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.style'
import { ICartProduct } from '../../types/cart.types'
import { CartContext } from '../../context/cart.context'

interface CartImageProps {
  product: ICartProduct
}

const CartItem: FunctionComponent<CartImageProps> = ({ product }) => {
  const { removeProductFromCart } = useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={25} onClick={handleRemoveClick} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
