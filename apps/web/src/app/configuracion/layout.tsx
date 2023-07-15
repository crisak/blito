import { Box, Text } from '@/app/shared/components'
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
      <Box
        as="aside"
        css={{
          backgroundColor: '$backgroundAlpha',
          overflow: 'auto'
        }}
      >
        <Text
          h4
          weight="bold"
          css={{
            padding: '$8'
          }}
        >
          Configuración
        </Text>
        <Menu />
      </Box>
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
