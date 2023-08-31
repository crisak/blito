import { PageLayout } from '@/app/components'
import { SetBreadcrumb } from '@/app/shared/components'
import { ProjectService } from '@/app/shared/services'
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

  return (
    <PageLayout showButtonSave={false}>
      <SetBreadcrumb
        params={[
          {
            key: 'projectId',
            value:
              project?.project?.name ||
              project.files?.[0]?.caption ||
              props.params.projectId
          },
          {
            key: 'categoryId',
            value: project?.Category?.name || props.params.categoryId
          }
        ]}
      />
      <ProjectDetailContainer project={project} />
    </PageLayout>
  )
}

export default DetailProject
