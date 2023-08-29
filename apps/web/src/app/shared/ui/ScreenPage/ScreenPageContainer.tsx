'use client'

import { BoxProps } from '@/app/shared/ui'
import { motion } from 'framer-motion'
import { Children, cloneElement, isValidElement } from 'react'
import { type Child, type PageName } from './ScreenPageProvider'

type ScreenPageContainerProps = Child &
  BoxProps & {
    page: PageName
    index?: number
    propsPage?: object
  }

const ScreenPageContainer = ({
  children,
  index,
  propsPage
}: ScreenPageContainerProps) => {
  return (
    <motion.div
      className="page-container absolute left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden bg-content1 text-foreground"
      initial={
        index === 0
          ? { transform: 'translateX(0%)', opacity: 0.5 }
          : { transform: 'translateX(100%)', opacity: 0.9 }
      }
      animate={{ transform: 'translateX(0%)', opacity: 1 }}
      exit={{ transform: 'translateX(100%)', opacity: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, propsPage)
        }
        return child
      })}
    </motion.div>
  )
}

export default ScreenPageContainer
