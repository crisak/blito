import { Box } from '../components'
import { ContainerLinkCardCategory, ModalFormCategory } from './components'

import { CategoryService } from '@/app/services'

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
        {categories.map(({ id: categoryId, files, name, description }) => (
          <ContainerLinkCardCategory
            key={categoryId}
            categoryId={categoryId}
            name={name}
            description={description}
            file={files}
          />
        ))}
      </Box>
      <ModalFormCategory />
    </>
  )
}

export default CategoryPage
