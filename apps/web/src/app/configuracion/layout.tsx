import { Box, Text } from '@/app/shared/ui'
import Menu from './components/Menu'

type SettingsLayoutProps = { children: React.ReactNode }

const HEIGHT_NAVBAR = '76px'

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '290px 3fr',
        gridTemplateRows: 'auto',
        gap: '1.2rem',
        height: `calc(100vh - ${HEIGHT_NAVBAR})`
      }}
    >
      <aside className="bg-backgroundAlpha overflow-auto">
        <Text as="h4" className="font-bold p-4">
          Configuración
        </Text>
        <Menu />
      </aside>
      <Box
        css={{
          overflow: 'auto'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default SettingsLayout
