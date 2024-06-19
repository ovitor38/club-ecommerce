import { FunctionComponent, createContext, useState } from 'react'
import Category from '../types/category.types'
import { collection, getDocs } from 'firebase/firestore'
import { categoryConverter } from '../converters/firestore.converters'
import { db } from '../config/firebase.config'
import { ICommonProps } from '../common/interfaces'

interface ICategoryContext {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<ICommonProps> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
