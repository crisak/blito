'use client'

import { AContent, RmDefaultParameter } from '@/models'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import { File as File_, TypeFile } from 'blito-models'
import clsx from 'clsx'
import { useState } from 'react'
import IconFile from './IconFile'
import PreviewFile from './PreviewFile'

type CardGalleryProps = AContent & { index: number }

const CardGallery = ({ index, ...gallery }: CardGalleryProps) => {
  const [currentPreview, setCurrentPreview] = useState<
    RmDefaultParameter<File_>
  >(getFile(gallery))

  return (
    <div
      key={gallery.id}
      className={clsx(
        'group/card-content relative flex items-center justify-center transition-background',
        'overflow-hidden rounded-2xl',
        'mx-unit-1 my-unit-1 sm:mx-unit-md sm:my-unit-lg',
        {
          'backdrop-saturate-125 opacity-20 blur-[1.5px] backdrop-blur-sm':
            !currentPreview.data,
          // TODO - Change validation add new property of Database
          'row-end-[span_22] sm:row-end-[span_26]':
            currentPreview?.type === TypeFile.VIDEO_YOUTUBE ||
            !currentPreview.data, // small, for Video youtube
          'row-end-[span_30] sm:row-end-[span_37]':
            currentPreview?.type !== TypeFile.VIDEO_YOUTUBE // medium
          // 'row-end-[span_45]': false // large
        }
      )}
    >
      <span className="absolute right-3 top-3 z-10">
        <IconFile {...gallery} />
      </span>
      <PreviewFile
        file={getFile(gallery, currentPreview)}
        className={clsx(
          'transition-all hover:cursor-pointer hover:brightness-50',
          {
            'h-[400px] w-[213px] object-cover object-center':
              currentPreview.data,
            'h-full w-full': !currentPreview.data
          }
        )}
      />
      {currentPreview.data && gallery.files.length > 1 && (
        <ScrollShadow
          hideScrollBar
          orientation="horizontal"
          className="group/preview-container absolute bottom-0 z-20 flex h-[62px] w-full items-center gap-x-unit-1 bg-content1/50 px-unit-sm backdrop-blur-sm backdrop-saturate-50"
        >
          {gallery.files.map((fil) => {
            const fileFilter = getFile(gallery, fil)
            const isActiveFile = isEqualFile(fileFilter, currentPreview)

            return (
              <PreviewFile
                thumbnail
                file={fileFilter}
                onClick={() => setCurrentPreview(fileFilter)}
                className={clsx(
                  {
                    active: isActiveFile,
                    grayscale: !isActiveFile
                  },
                  'aspect-square h-[50px] w-[50px] rounded-lg object-cover object-center transition-all hover:cursor-pointer hover:grayscale-0'
                )}
              />
            )
          })}
        </ScrollShadow>
      )}
    </div>
  )
}

function getFile(
  gallery: AContent,
  findFile?: RmDefaultParameter<File_> | null
): RmDefaultParameter<File_> {
  let mainFile = gallery.files.find((fil) => fil?.isBanner)

  if (findFile) {
    mainFile = gallery.files.find((fil) => isEqualFile(fil, findFile))
  }

  if (!mainFile && !findFile) {
    mainFile = gallery.files.find((fil) => fil?.data)
  }

  /** By default is URL src */
  let src = mainFile?.data
  const hasHttp = src?.includes('http')

  if (mainFile?.type === TypeFile.BASE64 && !hasHttp) {
    src = `data:${mainFile?.mimeType};base64,${mainFile?.data}`
  }

  const defaultAltImage =
    gallery?.project?.name || gallery?.project?.description

  return {
    ...mainFile,
    data: src || '',
    type: mainFile?.type || TypeFile.IMAGE,
    caption: mainFile?.caption || `Galería del proyecto ${defaultAltImage}`,
    mimeType: mainFile?.mimeType || ''
  }
}

function isEqualFile(
  file1: RmDefaultParameter<File_> | null,
  file2: RmDefaultParameter<File_> | null
) {
  const file1_ = file1 || { data: '', type: '', mimeType: '' }
  const file2_ = file2 || { data: '', type: '', mimeType: '' }

  const keyFile1 = file1_?.data + file1_?.type + file1_?.mimeType
  const keyFile2 = file2_?.data + file2_?.type + file2_?.mimeType

  return keyFile1 === keyFile2
}

export default CardGallery
