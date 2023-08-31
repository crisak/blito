'use client'

import Actions, { ActionsProps } from '@/app/components/Actions'
import { Container as ContainerUI } from '@/app/shared/ui'
import { AppStore, AuthStore } from '@/redux/store'
import { Spacer } from '@nextui-org/react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

type ContainerLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
  title?: React.ReactNode
} & ActionsProps

const PageLayout = ({
  children,
  title,
  showButtonSave
}: ContainerLayoutProps) => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)

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
        {displayHeader()}
        <Spacer y={1} />
        {children}
        <Spacer y={3} />
      </ContainerUI>
    </>
  )
}

export default PageLayout
