import { Box } from '@/app/shared/components'

type SettingsLayoutProps = { children: React.ReactNode }

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <Box>
      <aside>Menu</aside>
      <main>Content{children}</main>
    </Box>
  )
}

export default SettingsLayout
