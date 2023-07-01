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
    <Container breadcrumbs={breadcrumbs}>
      <Text h2 weight="bold">
        Proyecto
      </Text>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        corporis accusantium. Recusandae architecto neque consequatur libero
        excepturi? Perferendis, dolorum facilis illum sequi ut sunt beatae iste
        sint consequuntur rem commodi.
      </Text>
    </Container>
  )
}

export default DetailProject
