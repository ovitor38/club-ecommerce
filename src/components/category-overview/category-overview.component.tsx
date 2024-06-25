import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.style'

interface CategoryOverviewProps {
  category: Category
}
const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}
export default CategoryOverview
