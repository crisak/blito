import { Box, Text } from '@/app/shared/components'
import { CategoryService } from '@/app/shared/services'
import { ContainerListCategories, ModalFormCategory } from './components'
import { Container } from '@/app/components'

const categoryService = CategoryService.getInstance()

const CategoryPage = async () => {
  const categories = await categoryService.getAllWithFiles()

  return (
    <Container title={<Text as="h2">Categorías</Text>}>
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
    </Container>
  )
}

export default CategoryPage
