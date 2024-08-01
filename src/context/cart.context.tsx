import { createContext, FunctionComponent, useMemo, useState } from 'react'
import { ICartProduct } from '../types/cart.types'
import { ICommonProps } from '../common/interfaces'
import IProduct from '../types/product.type'

export interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  productsTotalPrice: string
  toogleCart: () => void
  addProductToCart: (product: IProduct) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsTotalPrice: '',
  toogleCart: () => {},
  addProductToCart: (product: IProduct) => {},
  removeProductFromCart: (productId: string) => {},
  increaseProductQuantity: (productId: string) => {},
  decreaseProductQuantity: (productId: string) => {}
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

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }
  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    )
  }

  const productsTotalPrice = useMemo(() => {
    const value = products.reduce((acc, { price, quantity }) => {
      return acc + Number(price) * quantity
    }, 0)

    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [products])

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toogleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        productsTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
