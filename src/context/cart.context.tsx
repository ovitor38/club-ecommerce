import { createContext, FunctionComponent, useState } from 'react'
import { ICartProduct } from '../types/cart.types'
import { ICommonProps } from '../common/interfaces'

export interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toogleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toogleCart: () => {}
})

const CartContextProvider: FunctionComponent<ICommonProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<ICartProduct[]>([])

  const toogleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toogleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
