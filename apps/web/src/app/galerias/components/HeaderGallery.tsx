/* eslint-disable no-console */
'use client'

import { Container, Text } from '@/app/shared/ui'
import { AnimatePresence, motion } from 'framer-motion'
import FilterGalleries from './FilterGalleries'
import ScrollHeader from './ScrollHeader'

const variants = {
  /** Animation start */
  inputScreen: { transform: 'translateY(0%)', opacity: 1 },

  exitScreen: { transform: 'translateY(-100%)', opacity: 0 }
}

const HeaderGallery = () => {
  return (
    // top-h-navbar sticky
    <ScrollHeader scrollThreshold={200} className="z-20 h-[180px] sm:h-[108px]">
      {(scrollTop, scrollThreshold, currentHeight) => {
        let heightHeaderDefault = 108
        let scrollTop_ = scrollTop

        if (currentHeight < 20) {
          scrollTop_ += heightHeaderDefault
        }

        const hideContainer = scrollTop_ >= scrollThreshold
        return (
          <AnimatePresence>
            {hideContainer ? null : (
              <motion.div
                initial="exitScreen"
                variants={variants}
                className="bg-background/60 backdrop-blur-lg backdrop-saturate-150 transition-all"
                /** Punto inicial de la animación */
                animate="inputScreen"
                exit="exitScreen"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <Container className="flex flex-col gap-unit-lg py-unit-lg sm:flex-row sm:justify-between">
                  <Text as="h2" className="mb-unit-md">
                    Galerías
                  </Text>
                  <FilterGalleries />
                </Container>
              </motion.div>
            )}
          </AnimatePresence>
        )
      }}
    </ScrollHeader>
  )
}

export default HeaderGallery
