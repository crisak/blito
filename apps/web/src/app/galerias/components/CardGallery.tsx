/* eslint-disable no-console */
'use client'

import ImageDefaultBlito from '@/assets/images/home-blito_bg_white.png'
import { AContent, RmDefaultParameter } from '@/models'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import { File as File_, TypeFile } from 'blito-models'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { HiVideoCamera } from 'react-icons/hi'
import { PiCopySimpleFill } from 'react-icons/pi'

type CardGalleryProps = AContent & { index: number }

const CardGallery = ({ index, ...gallery }: CardGalleryProps) => {
  const [currentPreview, setCurrentPreview] = useState<
    RmDefaultParameter<File_>
  >(getFile(gallery))

  // const allFiles = gallery.files
  //   .filter(
  //     (fil) => fil?.data?.includes('http')
  //     // fil?.type === TypeFile.IMAGE && fil.data?.includes('http')
  //   )
  //   .filter((fil) => fil?.data !== currentPreview.data)

  const icon = <HiVideoCamera size={26} className="text-foreground-600" />

  const iconFile = (
    <PiCopySimpleFill size={26} className="text-foreground-600" />
  )

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
        {index % 2 === 0 ? icon : iconFile}
      </span>
      <PreviewFile
        file={getFile(gallery, currentPreview)}
        className={clsx(
          // hover:bg-content1/50
          //group-hover/card-content:brightness-50
          'transition-all group-hover/card-content:cursor-pointer ',
          {
            'h-[400px] w-[213px] object-cover object-center':
              currentPreview.data,
            'h-full w-full': !currentPreview.data
          }
        )}
      />
      {currentPreview.data && gallery.files.length > 0 && (
        <ScrollShadow
          hideScrollBar
          orientation="horizontal"
          className="absolute bottom-0 z-20 flex h-[70px] w-full items-center gap-unit-sm bg-content1/50 px-unit-sm backdrop-blur-sm backdrop-saturate-50"
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
                    'border-primary/50': isActiveFile,
                    'border-transparent': !isActiveFile
                  },
                  'aspect-square h-[50px] w-[50px] rounded-lg border-3 object-cover object-center transition-all hover:cursor-pointer hover:brightness-50'
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

function PreviewFile({
  file,
  className: commonClassNames,
  onClick,
  thumbnail
}: {
  file: RmDefaultParameter<File_>
  className?: string
  thumbnail?: boolean
  onClick?: () => void
}) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  if (!file.data) {
    return (
      <Image
        src={ImageDefaultBlito.src}
        alt={file?.caption || ''}
        className={commonClassNames}
        width={213}
        height={400}
        onClick={handleClick}
      />
    )
  }

  const hasIframe = file.data.includes('iframe')

  if ((file.type === TypeFile.VIDEO_YOUTUBE && hasIframe) || hasIframe) {
    let iframeString = file.data
    /**
     * Replace dimensions to Iframe, width=2400px18, height=220px
     * <iframe width="1496" height="664" src="https://www.youtube.com/embed/BocyC81iaVg" title="La Logia Pururú Parará (Col) 3. Pedro Chapman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     */

    iframeString = iframeString.replace(/width="([\d]+)"/, ' width="220"')
    iframeString = iframeString.replace(/height="([\d]+)"/, 'height="220"')

    /**
     * Edit params to iframe set `rel` and `modestbranding`
     * - rel: Para desactivar los videos sugeridos al final de la reproducción, puedes agregar el parámetro rel=0.
     * - modestbranding: Si deseas reducir el logotipo y el nombre de YouTube en la esquina inferior derecha del reproductor, puedes agregar el parámetro modestbranding.
     */
    iframeString = iframeString.replace(
      /src="https:\/\/www.youtube.com\/embed\/([\w-]+)"/,
      'src="https://www.youtube.com/embed/$1?rel=0&modestbranding=1"'
    )

    iframeString = iframeString.replace(
      /<iframe /,
      '<iframe class="w-full h-[220px]"'
    )

    /** Add class to Iframe */
    if (thumbnail) {
      iframeString = iframeString.replace(
        /<iframe /,
        '<iframe class="w-[50px] h-[50px]"'
      )
    }

    console.log('Iframe:', iframeString)

    /** Render iframe string to React component */
    return (
      <div
        onClick={handleClick}
        className={clsx(
          {
            [commonClassNames || '']: thumbnail
          },
          'transition-all group-hover/card-content:brightness-50'
        )}
        dangerouslySetInnerHTML={{ __html: iframeString }}
      />
    )
  }

  if (file.mimeType.includes('image')) {
    return (
      <Image
        onClick={handleClick}
        src={file.data}
        alt={file?.caption || ''}
        className={commonClassNames}
        width={213}
        height={400}
      />
    )
  }

  if (file.mimeType.includes('video')) {
    return (
      <VideoPreview
        onClick={handleClick}
        src={file.data || ''}
        className={commonClassNames}
        type={file.mimeType}
        muted
        playsInline
      />
    )
  }

  /** Default image */
  return (
    <Image
      onClick={handleClick}
      src={ImageDefaultBlito.src}
      alt={file?.caption || ''}
      className={commonClassNames}
      width={213}
      height={400}
    />
  )
}

type VideoPreviewProps = Omit<
  React.ComponentPropsWithoutRef<'video'>,
  'onMouseEnter' | 'onMouseLeave'
> & {
  type: string
}

function VideoPreview({ src, type, ...props }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timerRef = useRef<number | null>(null)
  const [counterTime, setCounterTime] = useState<number>(0)
  const HOVER_TIME = 150 // Tiempo en milisegundos (1.5 segundos)

  const handleMouseEnter = () => {
    /** TODO - Validate logic only for desktop Apps */
    timerRef.current = window.setInterval(() => {
      if (!isPlaying) {
        setCounterTime((prevCounterTime) => {
          if (videoRef.current && prevCounterTime >= HOVER_TIME) {
            setIsPlaying(true)

            if (timerRef.current) {
              window.clearInterval(timerRef.current)
            }

            videoRef.current.play()
            return 0
          }

          return prevCounterTime + 1
        })
      }
    }, 1)
  }

  const handleMouseLeave = () => {
    /** TODO - Validate logic only for desktop Apps */

    if (timerRef.current) {
      window.clearInterval(timerRef.current)
    }

    if (videoRef.current) {
      setIsPlaying(false)
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }

    if (counterTime) {
      setCounterTime(0)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }

    let refTimeoutTmp = window.setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }, 3000)

    return () => {
      if (refTimeoutTmp) {
        window.clearTimeout(refTimeoutTmp)
      }
    }
  }, [])

  return (
    <>
      {counterTime >= 1 && counterTime < HOVER_TIME && (
        <div
          className="absolute inset-0 top-0 z-10 h-1 w-full bg-content1/80"
          aria-label="Loading..."
        >
          <div
            aria-label="Loading..."
            className="h-1 bg-primary"
            style={{
              width: `${Math.ceil((counterTime / HOVER_TIME) * 100)}%`
            }}
          ></div>
        </div>
      )}
      <video
        {...props}
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={src} type={type} />
        Tu navegador no admite la reproducción de videos.
      </video>
    </>
  )
}
export default CardGallery
