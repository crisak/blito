'use client'

import Breadcrumbs, {
  type BreadcrumbsProps
} from '@/app/components/Breadcrumbs'

import {
  CSS,
  Container as ContainerUI,
  Spacer,
  styled
} from '@nextui-org/react'
import Actions, { ActionsProps } from '@/app/components/Actions'
import { AppStore, AuthStore } from '@/redux/store'
import { useSelector } from 'react-redux'

type ContainerLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
  title?: React.ReactNode
  breadcrumbs?: BreadcrumbsProps
} & ActionsProps

const Header = styled('header', {
  '& h1, & h2, & h3, & h4': {
    marginBottom: 0
  }
})

const Container = ({
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

    let cssHeader: CSS = {}
    if (title && auth?.isAuth) {
      cssHeader = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }

    // const show = auth.isAuth && false === showActions.

    /**
     * Header
     */
    return (
      <>
        <Header css={cssHeader}>
          {title || null}

          {auth.isAuth && <Actions showButtonSave={showButtonSave} />}
        </Header>
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

export default Container
