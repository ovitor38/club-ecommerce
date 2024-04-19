import { useEffect, useState } from 'react'
import axios from 'axios'

import type Category from '../../types/category.types'
import env from '../../config/env.config'

import { CategoriesContainer, CategoriesContent } from './categories.styles'
import CategoryItem from '../category-item/category-item.component'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
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
