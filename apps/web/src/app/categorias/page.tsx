import { Box } from '../components'
import { ContainerLinkCardCategory } from './components'

import CategoryService from './services/Category.service'

const categoryService = CategoryService.getInstance()

const CategoryPage = async () => {
  const categories = await categoryService.getAllWithFiles()

  return (
    <Box
      css={{
        display: 'grid',
        'grid-template-columns': 'repeat(auto-fill, minmax(250px, 1fr))',
        'grid-gap': '1.2rem',
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
  )
}

export default CategoryPage
