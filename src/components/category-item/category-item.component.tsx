import { type FunctionComponent } from 'react'

import { CategoryItemContainer, CategoryName } from './category-item.style'

import type Category from '../../types/category.types'
interface ICategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
