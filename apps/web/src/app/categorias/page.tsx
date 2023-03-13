import { Text } from '@/app/components'
import CategoryService from './services/Category.service'

const categoryService = CategoryService.getInstance()

const CategoryPage = async () => {
  const categories = await categoryService.getAll()
  console.log('categories->', categories)

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default CategoryPage
