'use client'

import {
  Breadcrumbs,
  BreadcrumbsProps,
  LoadingProgress
} from '@/app/components'
import { Container, Spacer } from '@nextui-org/react'
import { ProjectService } from './services'

const projectService = ProjectService.getInstance()

const breadcrumbs = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/proyectos' }
  ]
} as BreadcrumbsProps

type ProjectsPageProps = {
  params?: unknown
  searchParams: {
    category: string
  }
}

const ProjectsPage = ({ searchParams }: ProjectsPageProps) => {
  // const { data: projects, error } = useSWR<Project[]>(
  //   `/projects?category=${searchParams.category}`,
  //   fetcher
  // )
  const projects = projectService.getAll()

  /**
   * todo - Add message of error or a Toast component
   */
  // if (error) return <div>failed to load</div>
  if (!projects) return <LoadingProgress />

  /**
   * todo - Add component of filters
   */

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Breadcrumbs {...breadcrumbs} />
        <Spacer y={2} />
      </Container>
      {/* <ListOfProjects projects={projects as Project[]} /> */}
      <Spacer y={3} />
    </>
  )
  /**
   * todo - Add more categories with recommendations
   */
}

export default ProjectsPage as any
