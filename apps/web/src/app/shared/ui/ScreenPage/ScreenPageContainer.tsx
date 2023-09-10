'use client'

import { motion, MotionProps } from 'framer-motion'
import { Children, cloneElement, isValidElement } from 'react'
import { type Child, type PageName } from './ScreenPageProvider'

type ScreenPageContainerProps = Child & {
  isPreview?: boolean
  page: PageName
  index?: number
  propsPage?: object
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> &
  MotionProps

const variants = {
  positionStartFirstScreen: { transform: 'translateX(0%)', opacity: 0.8 },
  positionStartNewScreen: { transform: 'translateX(100%)', opacity: 1 },
  positionStartPreviewScreen: { transform: 'translateX(0%)', opacity: 1 },

  /** Animation start */
  newScreen: { transform: 'translateX(0%)', opacity: 1 },
  previewScreen: { transform: 'translateX(-30%)', opacity: 0.3 },

  exitScreen: { transform: 'translateX(100%)', opacity: 1 }
}

const ScreenPageContainer = ({
  isPreview,
  page,
  index,
  propsPage,
  children,
  ...divProps
}: ScreenPageContainerProps) => {
  return (
    <motion.div
      {...divProps}
      key={page}
      variants={variants}
      className="page-container absolute left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-content1 text-foreground"
      /** Punto inicial de la animación */
      initial={
        index === 0
          ? 'positionStartFirstScreen'
          : Boolean(isPreview)
          ? 'positionStartPreviewScreen'
          : 'positionStartNewScreen'
      }
      animate={isPreview ? 'previewScreen' : 'newScreen'}
      exit="exitScreen"
      transition={{ duration: 0.25, ease: 'easeInOut' }}
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
