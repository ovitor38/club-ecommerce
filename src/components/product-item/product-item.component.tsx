import { FunctionComponent } from 'react'
import IProduct from '../../types/product.type'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
export default ProductItem
