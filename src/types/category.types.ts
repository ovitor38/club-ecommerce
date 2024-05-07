import IProduct from './product.type'

interface Category {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: IProduct[]
}

export default Category
