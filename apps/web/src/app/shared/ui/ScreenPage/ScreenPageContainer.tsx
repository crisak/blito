'use client'

import { Children, isValidElement, cloneElement } from 'react'
import { Box } from '@/app/shared/components'
import { useScreenPage, type Child, type PageName } from './ScreenPageProvider'
import { CSS, useTheme } from '@nextui-org/react'

type PageNavigationProps = Child & {
  page: PageName
  css?: CSS
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
  const { theme } = useTheme()

  return (
    <Box
      className={
        data.playAnimation.page === page
          ? `${data.playAnimation.animation}`
          : ''
      }
      css={{
        background: data.background || theme?.colors.background.value,
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
