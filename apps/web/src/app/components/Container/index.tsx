'use client'

import Breadcrumbs, {
  type BreadcrumbsProps
} from '@/app/components/Breadcrumbs'

import { Container as ContainerUI, Spacer } from '@nextui-org/react'

type ContainerLayoutProps = {
  children: React.ReactNode
  header?: React.ReactNode
  breadcrumbs?: BreadcrumbsProps
}

const Container = ({ children, breadcrumbs }: ContainerLayoutProps) => {
  const displayBreadcrumbs = () => {
    if (!breadcrumbs) {
      return null
    }

    return (
      <>
        <Breadcrumbs {...breadcrumbs} />
        <Spacer y={2} />
      </>
    )
  }
  return (
    <>
      <ContainerUI>
        <Spacer y={2} />
        {displayBreadcrumbs()}

        {children}
        <Spacer y={3} />
      </ContainerUI>
    </>
  )
}

export default Container
