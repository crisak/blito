'use client'

import { CSS, styled } from '@nextui-org/react'
import type { ComponentPropsWithoutRef } from 'react'

const FlexUI = styled('div')

type FlexProps = ComponentPropsWithoutRef<'div'> &
  Partial<{
    css: CSS
    gap: CSS['gap']
    wrap: CSS['flexWrap']
    justify: CSS['justifyContent']
    align: CSS['alignItems']
    direction: CSS['flexDirection']
    display: CSS['display']
    alignContent: CSS['alignContent']
  }>

const Flex = ({
  css,
  gap,
  wrap,
  display,
  alignContent,
  justify,
  align,
  direction,
  ...props
}: FlexProps) => {
  return (
    <FlexUI
      css={{
        gap,
        display: 'flex' || display,
        alignContent,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        ...css
      }}
      {...props}
    />
  )
}

export default Flex
