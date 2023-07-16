'use client'

import { Box } from '@/app/shared/components'
import { Button, Container, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import { default as ContentGallery } from './ContentGallery'
import { default as InfoDetail } from './InfoDetail'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import { SizeMe } from 'react-sizeme'
import { AContent } from '@/models'

const WIDTH_ASIDE = '300px'

type ProjectDetailContainerProps = {
  project: AContent
}

const ProjectDetailContainer = ({ project }: ProjectDetailContainerProps) => {
  const [isCollapse, setIsCollapse] = useState(false)

  const displayAside = () => {
    return project && <InfoDetail project={project} />
  }

  return (
    <>
      <Container>
        <Box
          css={{
            display: 'grid',
            transition: 'all .3s ease-in-out',
            gridTemplateColumns: `${isCollapse ? '0' : WIDTH_ASIDE} 1fr`,
            gridTemplateRows: '1fr',
            gap: '$10'
          }}
        >
          <Box
            css={{
              overflow: isCollapse ? 'hidden' : 'visible',
              position: 'relative'
            }}
          >
            <Box css={{ height: 0 }} />
            <SizeMe monitorHeight>
              {({ size }) => {
                let win = null
                if (typeof window !== 'undefined') {
                  win = window
                }
                const screenValue =
                  win !== undefined && win?.screen !== undefined
                    ? screen?.height || 0
                    : 0

                const valueSize = size?.height || 0

                const heightCalculate = valueSize === Infinity ? 0 : valueSize

                const topSticky = screenValue - heightCalculate

                const MARGIN_BOTTOM_ASIDE = '4rem'

                return (
                  <Box
                    css={{
                      position: 'sticky',
                      top: `calc(${topSticky}px - ${HEIGHT_NAVBAR} - ${MARGIN_BOTTOM_ASIDE})`
                    }}
                  >
                    {!isCollapse && (
                      <Button
                        css={{
                          left: `calc(${WIDTH_ASIDE} - 50px)`,
                          position: 'absolute',
                          zIndex: 20
                        }}
                        auto
                        flat
                        onClick={() => setIsCollapse(!isCollapse)}
                      >
                        <BsChevronDoubleLeft />
                      </Button>
                    )}

                    {displayAside()}
                  </Box>
                )
              }}
            </SizeMe>
          </Box>
          <Box
            css={{
              position: 'relative'
            }}
          >
            {isCollapse && (
              <Button
                css={{
                  ml: '1rem',
                  top: `calc(${HEIGHT_NAVBAR} + 1rem)`,
                  position: 'sticky',
                  zIndex: 20
                }}
                auto
                flat
                onClick={() => setIsCollapse(!isCollapse)}
              >
                <BsChevronDoubleRight />
              </Button>
            )}

            <ContentGallery project={project} />
          </Box>
        </Box>
      </Container>
      <Spacer y={2} />
    </>
  )
}

export default ProjectDetailContainer