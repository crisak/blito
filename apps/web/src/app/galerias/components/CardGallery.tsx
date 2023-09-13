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

const CardGallery = ({ files, id, project, index }: CardGalleryProps) => {
  let mainFile = files.find((fil) => fil?.isBanner)

  if (!mainFile) {
    mainFile = files.find((fil) => fil?.data)
  }

  /** By default is URL src */
  let src = mainFile?.data

  if (mainFile?.type === TypeFile.BASE64) {
    src = `data:${mainFile?.mimeType};base64,${mainFile?.data}`
  }

  const defaultAltImage = project?.name || project?.description

  const allFiles = files
    .filter(
      (fil) => fil?.data?.includes('http')
      // fil?.type === TypeFile.IMAGE && fil.data?.includes('http')
    )
    .filter((fil) => fil?.data !== src)

  const icon = <HiVideoCamera size={26} className="text-foreground-600" />

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
            !src,
          // TODO - Change validation add new property of Database
          'row-end-[span_22] sm:row-end-[span_26]':
            mainFile?.type === TypeFile.VIDEO_YOUTUBE || !src, // small, for Video youtube
          'row-end-[span_30] sm:row-end-[span_37]':
            mainFile?.type !== TypeFile.VIDEO_YOUTUBE // medium
          // 'row-end-[span_45]': false // large
        }
      )}
    >
      <span className="absolute right-3 top-3 z-10">
        {index % 2 === 0 ? icon : iconFile}
      </span>
      <PreviewFile
        file={{
          ...mainFile,
          data: src || '',
          type: mainFile?.type || TypeFile.IMAGE,
          caption:
            mainFile?.caption || `Galería del proyecto ${defaultAltImage}`,
          mimeType: mainFile?.mimeType || ''
        }}
        className={clsx(
          'transition-all group-hover/card-content:brightness-50',
          {
            'h-[400px] w-[213px] object-cover object-center': src,
            'h-full w-full': !src
          }
        )}
      />
      {src && allFiles.length > 0 && (
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
}

function PreviewFile({
  file,
  className: commonClassNames
}: {
  file: RmDefaultParameter<File_>
  className?: string
}) {
  if (!file.data) {
    return (
      <Image
        src={ImageDefaultBlito.src}
        alt={file?.caption || ''}
        className={commonClassNames}
        width={213}
        height={400}
      />
    )
  }

  if (file.type === TypeFile.VIDEO_YOUTUBE && file.data.includes('iframe')) {
    let iframeString = file.data
    /** Replace dimensions to Iframe, width=2400px18, height=220px */
    iframeString = iframeString.replace(/width="\d+"/, '400px')
    iframeString = iframeString.replace(/height="\d+"/, '220px')

    /**
     * Edit params to iframe set `rel` and `modestbranding`
     * - rel: Para desactivar los videos sugeridos al final de la reproducción, puedes agregar el parámetro rel=0.
     * - modestbranding: Si deseas reducir el logotipo y el nombre de YouTube en la esquina inferior derecha del reproductor, puedes agregar el parámetro modestbranding.
     */
    iframeString = iframeString.replace(
      /src="https:\/\/www.youtube.com\/embed\/([\w-]+)"/,
      'src="https://www.youtube.com/embed/$1?rel=0&modestbranding=1"'
    )

    /** Add class to Iframe */
    iframeString = iframeString.replace(
      /<iframe /,
      '<iframe class="w-full h-[220px]"'
    )

    /** Render iframe string to React component */
    return (
      <div
        className={clsx(
          'transition-all group-hover/card-content:brightness-50'
        )}
        dangerouslySetInnerHTML={{ __html: iframeString }}
      />
    )
  }

  if (file.mimeType.includes('image')) {
    return (
      <Image
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
        src={file.data || ''}
        className={commonClassNames}
        type={file.mimeType}
        width={213}
        height={400}
        muted
        playsInline
      />
    )
  }

  /** Default image */
  return (
    <Image
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
