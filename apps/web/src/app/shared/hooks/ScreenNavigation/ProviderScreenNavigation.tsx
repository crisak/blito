import { createContext, useContext, useState } from 'react'
import { Box } from '@/app/shared/components'
import { CSS } from '@nextui-org/react'

type ContextNavigationProps<T = unknown> = {
  playAnimation: {
    animation: string
    page: string
  }
  push: (page: PageName) => void
  pop: () => void
  background?: CSS['background']
  metadata: T
}

const ContextNavigation = createContext<ContextNavigationProps>({
  playAnimation: {
    animation: '',
    page: ''
  },
  push: (page: PageName) => {},
  pop: () => {},
  background: '',
  metadata: null
})

export function useScreenNavigation<T = unknown>() {
  return useContext<ContextNavigationProps<T>>(ContextNavigation as any)
}

export type Child = {
  children: React.ReactNode | React.ReactNode[]
}

export type PageName = string

type ProviderScreenNavigationProps<T = unknown> = {
  pages: Record<PageName, React.ReactNode>
  height: number | string
  currentPage: PageName
  background?: string
  children: (dta: {
    page: PageName
    component: React.ReactNode
  }) => React.ReactNode
  metadata: T
}

type ContainerProps = Child & {
  height: number | string
}

const Container = ({ height = 500, ...props }: ContainerProps) => {
  return (
    <Box
      {...props}
      css={{
        position: 'relative',
        width: '100%',
        height,
        border: '1px solid red'
      }}
    />
  )
}

const ProviderScreenNavigation = ({
  children,
  pages,
  height,
  currentPage,
  background,
  metadata
}: ProviderScreenNavigationProps) => {
  const [historyPage, setHistoryPage] = useState<
    Array<{
      page: PageName
      component: React.ReactNode
    }>
  >([{ page: currentPage, component: pages[currentPage] }])

  const [playAnimation, setPlayAnimation] = useState({
    animation: '',
    page: ''
  })

  const push = (page: PageName) => {
    setHistoryPage((prev) => {
      return [...prev, { page, component: pages[page] }]
    })

    setPlayAnimation({ animation: 'slide-in-right', page })
  }

  const pop = () => {
    if (historyPage.length === 1) {
      return
    }

    const lastIndex = historyPage.length - 1
    const lastPage = historyPage[lastIndex]

    setPlayAnimation({ animation: 'slide-out-right', page: lastPage.page })

    setTimeout(() => {
      setPlayAnimation({
        animation: '',
        page: ''
      })
      setHistoryPage((prev) => {
        prev.pop()
        return [...prev]
      })
    }, 240)
  }

  return (
    <ContextNavigation.Provider
      value={{ playAnimation, push, pop, background, metadata }}
    >
      <Container height={height}>
        <>
          {historyPage.map(({ page, component }) => {
            return children({ page, component })
          })}
        </>
      </Container>
    </ContextNavigation.Provider>
  )
}

export default ProviderScreenNavigation
