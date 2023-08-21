'use client'

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import { Box, BoxProps } from '@/app/shared/ui'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'

type ContextScreenPageProps<T = unknown> = {
  push: <PropsData = unknown>(page: PageName, props?: PropsData) => void
  pop: () => void

  metadata: T
  setMetadata: Dispatch<SetStateAction<T>>
  history: PageName[]
}

const ContextScreenPage = createContext<ContextScreenPageProps>({
  push: (page: PageName, props?: unknown) => {},
  pop: () => {},

  metadata: null,
  setMetadata: () => {},
  history: []
})

export function useScreenPage<T = unknown>() {
  return useContext<ContextScreenPageProps<T>>(ContextScreenPage as any)
}

export type Child = {
  children: React.ReactNode | React.ReactNode[]
}

export type PageName = string

type ProviderScreenNavigationProps<T = unknown> = {
  pages: Record<PageName, () => JSX.Element>
  currentPage: PageName
  className?: string
  children: <PropsData = unknown>(dta: {
    page: PageName
    component: React.ReactNode
    props?: PropsData
    index?: number
  }) => React.ReactNode
  metadata: T
}

type ContainerProps = Child & BoxProps

const Container = ({ css, className, ...props }: ContainerProps) => {
  return (
    <Box
      {...props}
      className={clsx(
        'pages-container relative w-full overflow-x-hidden',
        className
      )}
      css={css}
    />
  )
}

const ScreenPageProvider = ({
  children,
  pages,
  className,
  currentPage,
  metadata: initialMetadata
}: ProviderScreenNavigationProps) => {
  const [metadata, setMetadata] = useState(initialMetadata)
  const [historyPage, setHistoryPage] = useState<
    Array<{
      page: PageName
      component: React.ReactNode
      props?: unknown
    }>
  >([{ page: currentPage, component: pages[currentPage](), props: null }])

  function push<T>(page: PageName, props?: T) {
    setHistoryPage((prev) => {
      return [...prev, { page, component: pages[page](), props }]
    })
  }

  const pop = () => {
    if (historyPage.length === 1) {
      return
    }

    setHistoryPage((prev) => {
      prev.pop()
      return [...prev]
    })
  }

  return (
    <ContextScreenPage.Provider
      value={{
        push,
        pop,
        metadata,
        setMetadata,
        history: historyPage.map(({ page }) => page)
      }}
    >
      <Container className={className}>
        <AnimatePresence>
          {historyPage.map(({ page, component, props }, index) => {
            return children({ page, component, props, index })
          })}
        </AnimatePresence>
      </Container>
    </ContextScreenPage.Provider>
  )
}

export default ScreenPageProvider
