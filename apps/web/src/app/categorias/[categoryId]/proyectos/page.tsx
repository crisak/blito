import { PageLayout } from '@/app/components'
import { SetBreadcrumb } from '@/app/shared/components'
import { CategoryService, ProjectService } from '@/app/shared/services'
import { Box, Text } from '@/app/shared/ui'
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

  return (
    <PageLayout title={<Text as="h2">{category.name}</Text>}>
      <SetBreadcrumb params={[{ key: 'categoryId', value: category.name }]} />

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
    </PageLayout>
  )
}

export default CategoryContentsPage
