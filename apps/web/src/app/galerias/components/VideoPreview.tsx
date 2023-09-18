'use client'
import { useEffect, useRef, useState } from 'react'

type VideoPreviewProps = Omit<
  React.ComponentPropsWithoutRef<'video'>,
  'onMouseEnter' | 'onMouseLeave'
> & {
  type: string
}

const HOVER_TIME = 150 // Tiempo en milisegundos (1.5 segundos)

function VideoPreview({ src, type, ...props }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timerRef = useRef<number | null>(null)
  const [counterTime, setCounterTime] = useState<number>(0)

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
    if (props?.autoPlay === undefined || props?.autoPlay) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (props?.autoPlay === false) {
    return (
      <video {...props} ref={videoRef}>
        <source src={src} type={type} />
        Tu navegador no admite la reproducción de videos.
      </video>
    )
  }

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

export default VideoPreview
