'use client'

import { useState } from 'react'

type HoverProps<T extends React.ElementType> = {
  as?: T
  children: (props: {
    isHover: boolean
    event: React.MouseEvent<HTMLSpanElement> | null
  }) => JSX.Element
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>

const Hover = ({ children, as }: HoverProps<React.ElementType>) => {
  const [isHover, setIsHover] = useState(false)
  const [eventData, setEventData] =
    useState<React.MouseEvent<HTMLSpanElement> | null>(null)

  const Element = as || 'span'

  return (
    <Element
      onMouseEnter={(event: any) => {
        setIsHover(true)
        setEventData(event)
      }}
      onMouseLeave={() => {
        setIsHover(false)
        setEventData(null)
      }}
    >
      {children({ isHover, event: eventData })}
    </Element>
  )
}

export default Hover
