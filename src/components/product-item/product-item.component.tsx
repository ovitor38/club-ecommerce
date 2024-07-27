import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import IProduct from '../../types/product.type'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cart.context'

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addProductToCart(product)
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus size={25} />}
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
export default ProductItem
