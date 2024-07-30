import { createContext, FunctionComponent, useState } from 'react'
import { ICartProduct } from '../types/cart.types'
import { ICommonProps } from '../common/interfaces'
import IProduct from '../types/product.type'

export interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toogleCart: () => void
  addProductToCart: (product: IProduct) => void
  removeProductFromCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toogleCart: () => {},
  addProductToCart: (product: IProduct) => {},
  removeProductFromCart: (productId: string) => {}
})

const CartContextProvider: FunctionComponent<ICommonProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<ICartProduct[]>([])

  const toogleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: IProduct) => {
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string): void => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toogleCart,
        addProductToCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
