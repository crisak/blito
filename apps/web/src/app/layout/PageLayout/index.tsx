'use client'

import Breadcrumbs, {
  type BreadcrumbsProps
} from '@/app/components/Breadcrumbs'

import { Spacer } from '@nextui-org/react'
import Actions, { ActionsProps } from '@/app/components/Actions'
import { AppStore, AuthStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Container as ContainerUI } from '@/app/shared/ui'
import clsx from "clsx"

type ContainerLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
  title?: React.ReactNode
  breadcrumbs?: BreadcrumbsProps
} & ActionsProps

const PageLayout = ({
  children,
  breadcrumbs,
  title,
  showButtonSave
}: ContainerLayoutProps) => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)

  const displayBreadcrumbs = () => {
    if (!breadcrumbs?.links?.length) {
      return null
    }

    return <Breadcrumbs {...breadcrumbs} />
  }

  const displayHeader = () => {
    if (!title && !auth?.isAuth) {
      return null
    }

    let classNamesHeader: string = ''
    if (title && auth?.isAuth) {
      classNamesHeader = 'flex justify-between items-center'
    }

    // const show = auth.isAuth && false === showActions.

    /**
     * Header
     */
    return (
      <>
        <header className={clsx(classNamesHeader)}>
          {title || null}

          {auth.isAuth && <Actions showButtonSave={showButtonSave} />}
        </header>
        <Spacer y={2} />
      </>
    )
  }

  return (
    <>
      <ContainerUI>
        <Spacer y={1} />
        {displayBreadcrumbs()}
        <Spacer y={1} />
        {displayHeader()}
        <Spacer y={1} />
        {children}
        <Spacer y={3} />
      </ContainerUI>
    </>
  )
}

export default PageLayout
