import { Box } from '@/app/shared/components'
import {
  useScreenNavigation,
  type Child,
  type PageName
} from './ProviderScreenNavigation'
import { CSS, useTheme } from '@nextui-org/react'

type PageNavigationProps = Child & {
  page: PageName
  css?: CSS
  index?: number
}

const PageNavigation = ({
  children,
  page,
  css,
  index
}: PageNavigationProps) => {
  const data = useScreenNavigation()
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
        zIndex: index !== null && index !== undefined ? index + 2 : 'auto',
        ...css
      }}
    >
      {children}
    </Box>
  )
}

export default PageNavigation
