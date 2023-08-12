import { Children, isValidElement, cloneElement } from 'react'
import { Box } from '@/app/shared/ui'
import { useScreenPage, type Child, type PageName } from './ScreenPageProvider'
import { semanticColors } from '@nextui-org/react'

type PageNavigationProps = Child & {
  page: PageName
  css?: React.CSSProperties
  index?: number
  propsPage?: object
}

const PageNavigation = ({
  children,
  page,
  css,
  index,
  propsPage
}: PageNavigationProps) => {
  const data = useScreenPage()

  return (
    <Box
      className={
        data.playAnimation.page === page
          ? `${data.playAnimation.animation}`
          : ''
      }
      css={{
        background: data.background || semanticColors.dark.background['600'],
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: index !== null && index !== undefined ? index + 2 : 'auto',
        ...css
      }}
    >
      {/* Clonamos el componente hijo y le asignamos la propiedad personalizada */}
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, propsPage)
        }
        return child
      })}
    </Box>
  )
}

export default PageNavigation
