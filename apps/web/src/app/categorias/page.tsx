import { Box } from '../components'
import { LinkCardCategory, ContainerLinkCardCategory } from './components'

import CategoryService from './services/Category.service'

const categoryService = CategoryService.getInstance()

const CategoryPage = async () => {
  const categories = await categoryService.getAllWithFiles()

  return (
    <Box
      css={{
        margin: '0',
        padding: '0',
        width: '80vw',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        'grid-template-columns': 'repeat(auto-fill, 250px)',
        'grid-auto-rows': '10px',
        'justify-content': 'center',
        'background-color': 'black'
      }}
    >
      {categories.map(({ id: categoryId, files }) => (
        <ContainerLinkCardCategory key={categoryId} categoryId={categoryId}>
          {files.slice(1).map((file, index) => {
            const id = file.caption + file.mimeType + file.data
            return (
              <LinkCardCategory
                key={id}
                className={`card-image__card-${index + 1}`}
                index={index}
                {...file}
              />
            )
          })}
        </ContainerLinkCardCategory>
      ))}
    </Box>
  )
}

export default CategoryPage
