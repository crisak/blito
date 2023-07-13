import { BreadcrumbsProps, Container, Text } from '@/app/components'
import { ProjectService } from '@/app/services'
import { ProjectDetailContainer } from './components'

const projectService = ProjectService.getInstance()

type DetailProjectProps = {
  params: {
    categoryId: string
    projectId: string
  }
}

const DetailProject = async (props: DetailProjectProps) => {
  const project = await projectService.getById(props.params.projectId)

  const breadcrumbs: BreadcrumbsProps = {
    links: [
      { label: 'Categorias', href: '/categorias' },
      {
        label: project.Category?.name || '',
        href: `/categorias/${props.params.categoryId}`
      },
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
    <Container breadcrumbs={breadcrumbs} showButtonSave={false}>
      <ProjectDetailContainer project={project} />
    </Container>
  )
}

export default DetailProject
