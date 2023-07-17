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
}

const PageNavigation = ({ children, page, css }: PageNavigationProps) => {
  const data = useScreenNavigation()
  const { theme } = useTheme()

  console.log('PageNavigation.Background:', theme?.colors.background.value)

  return (
    <Box
      className={
        data.playAnimation.page === page ? data.playAnimation.animation : ''
      }
      css={{
        background: data.background || theme?.colors.background.value,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        ...css
      }}
    >
      {children}
    </Box>
  )
}

export default PageNavigation
