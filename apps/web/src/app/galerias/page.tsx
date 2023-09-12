import { ProjectService } from '@/app/shared/services'
import { Text } from '@/app/shared/ui'
import { AContent } from '@/models'
import { TypeFile } from 'blito-models'
import Image from 'next/image'
import { HiVideoCamera } from 'react-icons/hi'
import { PiCopySimpleFill } from 'react-icons/pi'

import ImageDefaultBlito from '@/assets/images/home-blito_bg_white.png'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import clsx from 'clsx'

const contentSrv = ProjectService.getInstance()

/**
 * @doc Page GalleriesPage
 * @link https://github.com/an-object-is-a/html-css-js-pinterest-layout/blob/main/index.html
 */
const GalleriesPage = async () => {
  const contents: Array<AContent> = await contentSrv.getAll()

  return (
    <>
      <header>
        <Text as="h2">Galerías</Text>
      </header>
      <section className="sm:px-unit-auto mx-auto grid auto-rows-[10px] grid-cols-[repeat(auto-fill,_183px)] justify-center px-unit-sm py-unit-lg sm:grid-cols-[repeat(auto-fill,_250px)]">
        {contents.map(({ files, id, project }, index) => {
          let mainFile = files.find((fil) => fil?.isBanner)
          mainFile =
            mainFile || files.find((fil) => fil?.data?.includes('http'))

          let srcImage =
            mainFile?.type === TypeFile.IMAGE && mainFile.data?.includes('http')
              ? mainFile?.data
              : ''

          if (
            mainFile?.type === TypeFile.BASE64 &&
            mainFile?.mimeType?.includes('image')
          ) {
            srcImage = `data:${mainFile?.mimeType};base64,${mainFile?.data}`
          }

          const defaultAltImage = project?.name || project?.description

          const allFiles = files
            .filter(
              (fil) => fil?.data?.includes('http')
              // fil?.type === TypeFile.IMAGE && fil.data?.includes('http')
            )
            .filter((fil) => fil?.data !== srcImage)

          const icon = (
            <HiVideoCamera size={26} className="text-foreground-600" />
          )

          const iconFile = (
            <PiCopySimpleFill size={26} className="text-foreground-600" />
          )

          return (
            <div
              key={id}
              className={clsx(
                'group/card-content relative flex items-center justify-center transition-background hover:cursor-pointer hover:bg-content1/50',
                'overflow-hidden rounded-2xl',
                'mx-unit-1 my-unit-1 sm:mx-unit-md sm:my-unit-lg',
                {
                  'backdrop-saturate-125 opacity-20 blur-[1.5px] backdrop-blur-sm':
                    !srcImage,
                  'row-end-[span_22] sm:row-end-[span_26]': !srcImage, // small
                  'row-end-[span_30] sm:row-end-[span_37]': srcImage // medium
                  // 'row-end-[span_45]': false // large
                }
              )}
            >
              <span className="absolute right-3 top-3 z-10">
                {index % 2 === 0 ? icon : iconFile}
              </span>
              <Image
                src={srcImage || ImageDefaultBlito.src}
                alt={
                  mainFile?.caption || `Galería del proyecto ${defaultAltImage}`
                }
                className={clsx(
                  'transition-all group-hover/card-content:brightness-50',
                  {
                    'h-[400px] w-[213px] object-cover object-center': srcImage,
                    'h-full w-full': !srcImage
                  }
                )}
                width={213}
                height={400}
              />
              {srcImage && allFiles.length > 0 && (
                <ScrollShadow
                  hideScrollBar
                  orientation="horizontal"
                  className="absolute bottom-0 z-10 flex gap-unit-md bg-content1/50 p-unit-sm backdrop-blur-sm backdrop-saturate-50"
                >
                  {allFiles.map((fil) => (
                    <Image
                      className="rounded-lg"
                      src={fil?.data || ''}
                      alt={fil?.caption || ''}
                      width={50}
                      height={50}
                    />
                  ))}
                </ScrollShadow>
              )}
            </div>
          )
        })}
      </section>
    </>
  )
}

export default GalleriesPage
