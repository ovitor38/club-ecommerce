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
  const { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } =
    useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  const handleIncreaseCartQuantity = () => {
    increaseProductQuantity(product.id)
  }
  const handleDecreaseCartQuantity = () => {
    decreaseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseCartQuantity}/>
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseCartQuantity} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={25} onClick={handleRemoveClick} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
