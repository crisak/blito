import { Box } from '@/app/shared/components'
import { CSS } from '@nextui-org/react'

type HeaderTableProps = {
  children: React.ReactNode | React.ReactNode[] | string
  css?: CSS
}

const HeaderTable = ({ children, css }: HeaderTableProps) => {
  return (
    <Box
      css={{
        borderWidth: '2px',
        borderColor: '$border',
        borderStyle: 'solid',
        borderBottom: 'none',
        borderRadius: '$xl $xl 0 0',
        padding: '$sm $sm',
        ...css
      }}
    >
      <Box
        css={{
          padding: '$md'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default HeaderTable
