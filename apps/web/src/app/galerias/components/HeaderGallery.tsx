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
    <ScrollHeader
      scrollThreshold={300}
      className="sticky top-h-navbar z-20 h-[calc(theme(space.h-navbar)_+_10px)]"
    >
      {({ scrollThreshold, scrollTop, currentHeight }) => {
        console.log({ scrollThreshold, scrollTop, currentHeight })

        let heightHeaderDefault = 108
        let scrollTop_ = scrollTop.current

        if (currentHeight < 20) {
          scrollTop_ += heightHeaderDefault
        }

        let hideContainer = scrollTop_ >= scrollThreshold && !showFilter

        if (scrollTop.previous > scrollTop.current) {
          hideContainer = false
        }

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
                <Container className="relative z-20 flex h-h-navbar justify-between gap-unit-lg px-unit-md py-unit-md sm:items-center sm:py-unit-lg">
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
                      'absolute right-0 top-h-navbar w-full sm:relative sm:block md:top-auto',
                      {
                        hidden: !showFilter,
                        'z-20 rounded-b-2xl bg-content1/95 px-unit-md py-unit-2xl backdrop-blur-lg backdrop-saturate-150 transition-all':
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
