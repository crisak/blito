import { Box } from '@/app/shared/ui'

export type SectionProps = {
  children: React.ReactElement | React.ReactElement[]
  invert?: boolean
}

export const Section = ({ children, invert }: SectionProps) => {
  return (
    <Box
      css={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: invert ? 'row-reverse' : 'initial',
        justifyContent: 'center',
        gap: '5rem'
      }}
    >
      {children}
    </Box>
  )
}

export const SectionContent = ({ children }: SectionProps) => {
  return (
    <Box
      css={{
        width: '100%',
        maxWidth: '350px'
      }}
    >
      {children}
    </Box>
  )
}
