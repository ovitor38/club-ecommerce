import { useEffect, useState } from 'react'
import axios from 'axios'

import type Category from '../../types/category.types'
import env from '../../config/env.config'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log(categories)

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
    void fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent></CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
