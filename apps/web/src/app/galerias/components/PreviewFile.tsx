import ImageDefaultBlito from '@/assets/images/home-blito_bg_white.png'
import { RmDefaultParameter } from '@/models'
import { File as File_, TypeFile } from 'blito-models'
import clsx from 'clsx'
import Image from 'next/image'
import VideoPreview from './VideoPreview'

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
    if (thumbnail) {
      /** Show thumbnail of youtuve in a image tag of html */
      const getIdYouTube = file.data.match(/embed\/([\w-]+)/)
      const idYouTube = getIdYouTube ? getIdYouTube[1] : ''

      return (
        <Image
          onClick={handleClick}
          src={`https://img.youtube.com/vi/${idYouTube}/hqdefault.jpg`}
          alt={file?.caption || ''}
          className={commonClassNames}
          width={80}
          height={80}
        />
      )
    }

    let iframeString = file.data

    iframeString = iframeString.replace(/width="([\d]+)"/, ' width="220"')
    iframeString = iframeString.replace(/height="([\d]+)"/, 'height="220"')

    iframeString = iframeString.replace(
      /src="https:\/\/www.youtube.com\/embed\/([\w-]+)"/,
      `src="https://www.youtube.com/embed/$1?rel=0&modestbranding=1?showinfo=0&controls=${
        thumbnail ? 0 : 1
      }&autohide=1"`
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
        autoPlay={Boolean(!thumbnail)}
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

export default PreviewFile
