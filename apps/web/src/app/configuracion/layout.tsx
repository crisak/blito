import { Box, Text } from '@/app/shared/ui'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import clsx from 'clsx'
import Menu from './components/Menu'

type SettingsLayoutProps = { children: React.ReactNode }

/**
 * 64px = height of navbar
 */

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <Box
      className={clsx(
        'grid grid-cols-1 md:grid-cols-[280px_1fr]',
        `md:h-[calc(100vh_-_64px)]`
      )}
    >
      <ScrollShadow
        className="sticky top-[64px] z-10 overflow-auto bg-background/70 backdrop-blur-lg backdrop-saturate-150 md:relative md:top-auto"
        orientation="horizontal"
        hideScrollBar
      >
        <Text as="h4" className="sticky left-0 p-4 font-bold md:relative">
          Configuración
        </Text>
        <Menu />
      </ScrollShadow>

      <Box className="overflow-auto p-unit-lg">{children}</Box>
    </Box>
  )
}

export default SettingsLayout
