import { type FunctionComponent } from 'react'

import { CategoryItemContainer, CategoryName } from './category-item.style'

import type Category from '../../types/category.types'
interface ICategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
  console.log(category)

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.name}</p>
        <p>Explore</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
