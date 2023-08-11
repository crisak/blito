'use client'

import { useState, useMemo } from 'react'
import Lightbox from 'react-image-lightbox'
import StackGrid from 'react-stack-grid'
import { BORDER_RADIUS } from '@/styles/variables'
import { Box } from '@/app/shared/components'
import Image from 'next/image'
import { AContent } from '@/models'

export const WIDTH = 200

export const HEIGHT = 300

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

type ContentGalleryProps = {
  project: AContent
}

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const ContentGallery = ({ project }: ContentGalleryProps) => {
  const [index, setIndex] = useState(-1)

  const images = useMemo(() => {
    return (
      project.files.filter((fil) => Boolean(fil?.data)).map((fil) => fil) || []
    )
  }, [project.files])

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage

  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number, item?: any) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <>
      <Box>
        <StackGrid
          columnWidth={WIDTH}
          duration={480}
          gutterWidth={20}
          gutterHeight={20}
        >
          {images.map((img, index) => (
            <Box
              key={`${img?.data || ''}${img?.caption || ''}${img?.size || ''}`}
              onClick={() => handleClick(index)}
              className="content-image"
              css={{
                cursor: 'pointer'
              }}
            >
              <Image
                src={img?.data!}
                alt={img?.caption || `Image de galeria ${img?.data}`}
                width={WIDTH}
                height={HEIGHT}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(WIDTH, HEIGHT)
                )}`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: BORDER_RADIUS
                }}
              />
            </Box>
          ))}
        </StackGrid>
      </Box>

      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.data}
          imageTitle={currentImage.caption || 'Blito image'}
          mainSrcThumbnail={currentImage.data}
          nextSrc={nextImage?.data}
          nextSrcThumbnail={nextImage?.data}
          prevSrc={prevImage?.data}
          prevSrcThumbnail={prevImage?.data}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  )
}

export default ContentGallery
