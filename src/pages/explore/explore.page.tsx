import { FunctionComponent } from 'react'
import Header from '../../components/header/header.component'
import CategoriesOverview from '../../components/categories-overview/categories-overview.component'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview></CategoriesOverview>
    </>
  )
}
export default ExplorePage
