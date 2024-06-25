import { type FunctionComponent } from 'react'

import { CategoryItemContainer, CategoryName } from './category-item.style'

import type Category from '../../types/category.types'
import { useNavigate } from 'react-router-dom'
interface ICategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<ICategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer $backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.name}</p>
        <p>Explore</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
