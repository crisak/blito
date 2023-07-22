import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import { Box } from '@/app/shared/components'
import { CSS } from '@nextui-org/react'

type ContextNavigationProps<T = unknown> = {
  playAnimation: {
    animation: string
    page: string
  }
  push: <PropsData = unknown>(page: PageName, props?: PropsData) => void
  pop: () => void
  background?: CSS['background']
  metadata: T
  setMetadata: Dispatch<SetStateAction<T>>
  history: PageName[]
}

const ContextNavigation = createContext<ContextNavigationProps>({
  playAnimation: {
    animation: '',
    page: ''
  },
  push: (page: PageName, props?: unknown) => {},
  pop: () => {},
  background: '',
  metadata: null,
  setMetadata: () => {},
  history: []
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
  containerCss?: CSS
  currentPage: PageName
  background?: string
  children: <PropsData = unknown>(dta: {
    page: PageName
    component: React.ReactNode
    props?: PropsData
    index?: number
  }) => React.ReactNode
  metadata: T
}

type ContainerProps = Child & {
  css?: CSS
}

const Container = ({ css, ...props }: ContainerProps) => {
  return (
    <Box
      {...props}
      css={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...css
      }}
    />
  )
}

const ProviderScreenNavigation = ({
  children,
  pages,
  containerCss,
  currentPage,
  background,
  metadata: initialMetadata
}: ProviderScreenNavigationProps) => {
  const [metadata, setMetadata] = useState(initialMetadata)
  const [historyPage, setHistoryPage] = useState<
    Array<{
      page: PageName
      component: React.ReactNode
      props?: unknown
    }>
  >([{ page: currentPage, component: pages[currentPage], props: null }])

  const [playAnimation, setPlayAnimation] = useState({
    animation: '',
    page: ''
  })

  function push<T>(page: PageName, props?: T) {
    setHistoryPage((prev) => {
      return [...prev, { page, component: pages[page], props }]
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
      value={{
        playAnimation,
        push,
        pop,
        background,
        metadata,
        setMetadata,
        history: historyPage.map(({ page }) => page)
      }}
    >
      <Container css={containerCss}>
        <>
          {historyPage.map(({ page, component, props }, index) => {
            return children({ page, component, props, index })
          })}
        </>
      </Container>
    </ContextNavigation.Provider>
  )
}

export default ProviderScreenNavigation
