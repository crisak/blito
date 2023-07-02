import { Box } from '../components'
import { ContainerListCategories, ModalFormCategory } from './components'

const CategoryPage = async () => {
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
        <ContainerListCategories />
      </Box>
      <ModalFormCategory />
    </>
  )
}

export default CategoryPage
