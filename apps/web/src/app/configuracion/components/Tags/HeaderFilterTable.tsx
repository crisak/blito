import { Box } from '@/app/shared/components'
import { CSS } from '@nextui-org/react'

type HeaderTableProps = {
  children: React.ReactNode | React.ReactNode[] | string
  css?: CSS
}

const HeaderFilterTable = ({ children, css }: HeaderTableProps) => {
  return (
    <Box
      css={{
        padding: '$md',
        ...css
      }}
    >
      {children}
    </Box>
  )
}

export default HeaderFilterTable
