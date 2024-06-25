import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.style'
import ProductItem from '../product-item/product-item.component'

interface CategoryOverviewProps {
  category: Category
}
const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}
export default CategoryOverview
