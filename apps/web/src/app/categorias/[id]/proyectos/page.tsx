import { Box, Container, Text, BreadcrumbsProps } from '@/app/components'
import { CategoryService, ProjectService } from '@/services'

type ProjectsPageProps = {
  params: { id: string }
}

const categoryService = CategoryService.getInstance()
const projectService = ProjectService.getInstance()

const CategoryContentsPage = async ({ params }: ProjectsPageProps) => {
  const [category, projects] = await Promise.all([
    categoryService.getById(params.id),
    projectService.getAllByCategory(params.id)
  ])

  const breadcrumbs: BreadcrumbsProps = {
    links: [
      { label: 'Categorias', href: '/categorias' },
      { label: category.name, href: `/categorias/${params.id}` },
      { label: 'Proyectos', href: `/categorias/${params.id}/proyectos` }
    ]
  }

  return (
    <Container breadcrumbs={breadcrumbs}>
      <Text h2 weight="bold">
        {category.name}
      </Text>
      <hr />
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.2rem',
          padding: '10px'
        }}
      >
        {projects.map(({ id }) => (
          <Box key={id} css={{ w: '100%', h: '400px', border: '$accents1' }}>
            <Text h4 weight="bold">
              {category.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default CategoryContentsPage
