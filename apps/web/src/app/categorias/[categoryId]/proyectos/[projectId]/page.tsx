import { BreadcrumbsProps, Container, Text } from '@/app/components'
import { CategoryService, ProjectService } from '@/app/services'

const projectService = ProjectService.getInstance()
const categoryService = CategoryService.getInstance()

type DetailProjectProps = {
  params: {
    categoryId: string
    projectId: string
  }
}

const DetailProject = async (props: DetailProjectProps) => {
  const [project, category] = await Promise.all([
    projectService.getById(props.params.projectId),
    categoryService.getById(props.params.categoryId)
  ])

  const breadcrumbs: BreadcrumbsProps = {
    links: [
      { label: 'Categorias', href: '/categorias' },
      { label: category.name, href: `/categorias/${props.params.categoryId}` },
      {
        label: 'Proyectos',
        href: `/categorias/${props.params.categoryId}/proyectos`
      },
      {
        label: project.project?.name || project.type || '',
        href: `/categorias/${props.params.categoryId}/proyectos/${props.params.projectId}`
      }
    ]
  }

  return (
    <Container
      breadcrumbs={breadcrumbs}
      title={<Text h2>{project.project?.name || ''}</Text>}
    >
      <div>
        <Text b>Titulo</Text>
        <Text>{project.project?.name}</Text>
      </div>
      <div>
        <Text b>Descripción</Text>
        <Text>{project.project?.description}</Text>
      </div>
      <div>
        <Text b>Fecha</Text>
        <Text>{new Date(project.date).toLocaleString()}</Text>
      </div>
    </Container>
  )
}

export default DetailProject
