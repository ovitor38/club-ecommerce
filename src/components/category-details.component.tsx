import { FunctionComponent, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { BiChevronLeft } from 'react-icons/bi'

import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converters'

import Category from '../types/category.types'

import Loading from './loading/loading.component'

import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './category-details.style'
import ProductItem from './product-item/product-item.component'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const [loading, setIsLoading] = useState(false)
  const [category, setCategory] = useState<Category | null>(null)

  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/')
  }
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnpaShot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnpaShot.docs[0]?.data()
        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  if (loading) return <Loading />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer>
          <BiChevronLeft size={36} onClick={handleBackClick} />
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>
      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryDetails
