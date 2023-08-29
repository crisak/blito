import { Box, Text } from '@/app/shared/ui'
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
        'grid grid-cols-1 sm:grid-cols-[280px_1fr]',
        `sm:h-[calc(100vh_-_64px)]`
      )}
    >
      <aside className="overflow-auto bg-background/50">
        <Text as="h4" className="p-4 font-bold">
          Configuración
        </Text>
        <Menu />
      </aside>
      <Box className="overflow-auto p-unit-lg">{children}</Box>
    </Box>
  )
}

export default SettingsLayout
