/* eslint-disable no-console */
'use client'

import { Container, Text } from '@/app/shared/ui'
import { Button } from '@nextui-org/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { VscFilter } from 'react-icons/vsc'
import FilterGalleries from './FilterGalleries'
import ScrollHeader from './ScrollHeader'

const variants = {
  /** Animation start */
  inputScreen: { transform: 'translateY(0%)', opacity: 1 },

  exitScreen: { transform: 'translateY(-100%)', opacity: 0 }
}

const HeaderGallery = () => {
  const [showFilter, setShowFilter] = useState(false)
  return (
    // top-h-navbar sticky
    <ScrollHeader
      scrollThreshold={200}
      className="sticky top-h-navbar z-20 h-[72px] sm:h-[108px]"
    >
      {(scrollTop, scrollThreshold, currentHeight) => {
        let heightHeaderDefault = 108
        let scrollTop_ = scrollTop

        if (currentHeight < 20) {
          scrollTop_ += heightHeaderDefault
        }

        const hideContainer = scrollTop_ >= scrollThreshold && !showFilter
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
                <Container className="relative z-20 flex justify-between gap-unit-lg px-unit-md py-unit-md sm:py-unit-lg">
                  <Text as="h2">Galerías</Text>
                  <div className="sm:hidden">
                    <Button
                      variant="light"
                      onClick={() => setShowFilter(!showFilter)}
                      isIconOnly
                    >
                      <VscFilter />
                    </Button>
                    {/* VscFilterFilled */}
                  </div>

                  <div
                    className={clsx(
                      'absolute right-0 top-[72px] w-full sm:relative sm:block md:top-auto',
                      {
                        hidden: !showFilter,
                        'z-20 rounded-b-2xl bg-background/90 px-unit-md py-unit-2xl backdrop-blur-lg backdrop-saturate-150 transition-all':
                          showFilter
                      }
                    )}
                  >
                    <FilterGalleries />
                  </div>
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
