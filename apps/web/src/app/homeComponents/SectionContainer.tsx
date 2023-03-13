'use client'

import { Box } from '../components'

type SectionContainerProps = { children: React.ReactElement }

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <Box
      css={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

export type SectionProps = {
  children: React.ReactElement | React.ReactElement[]
}

export const Section = ({ children }: SectionProps) => {
  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      {children}
    </Box>
  )
}
