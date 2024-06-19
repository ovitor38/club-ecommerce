import { useContext, useEffect } from 'react'

import { CategoriesContainer, CategoriesContent } from './categories.styles'
import CategoryItem from '../category-item/category-item.component'
import { CategoryContext } from '../../context/category.context'
import Loading from '../loading/loading.component'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
