import { Box, Container, Text, BreadcrumbsProps } from '@/app/components'
import { CategoryService, ProjectService } from '@/app/shared/services'
import { CardProject } from './components'

type ProjectsPageProps = {
  params: { categoryId: string }
}

const categoryService = CategoryService.getInstance()
const projectService = ProjectService.getInstance()

const CategoryContentsPage = async ({ params }: ProjectsPageProps) => {
  const [category, projects] = await Promise.all([
    categoryService.getById(params.categoryId),
    projectService.getAllByCategory(params.categoryId)
  ])

  const breadcrumbs: BreadcrumbsProps = {
    links: [
      { label: 'Categorias', href: '/categorias' },
      { label: category.name, href: `/categorias/${params.categoryId}` },
      { label: 'Proyectos', href: `/categorias/${params.categoryId}/proyectos` }
    ]
  }

  return (
    <Container
      breadcrumbs={breadcrumbs}
      title={<Text h2>{category.name}</Text>}
    >
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.2rem',
          padding: '10px'
        }}
      >
        {projects.map((content) => (
          <CardProject
            key={content.id}
            categoryId={params.categoryId}
            {...content}
          />
        ))}
      </Box>
    </Container>
  )
}

export default CategoryContentsPage
