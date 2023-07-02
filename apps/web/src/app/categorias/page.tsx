import { Box } from '../components'
import { CategoryService } from '@/app/services'
import { ContainerListCategories, ModalFormCategory } from './components'

const categoryService = CategoryService.getInstance()

const CategoryPage = async () => {
  const categories = await categoryService.getAllWithFiles()

  return (
    <>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.2rem',
          padding: '10px'
        }}
      >
        <ContainerListCategories categories={categories} />
      </Box>
      <ModalFormCategory />
    </>
  )
}

export default CategoryPage
