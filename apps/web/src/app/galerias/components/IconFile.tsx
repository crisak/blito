import { AContent } from '@/models'
import { ContentType, TypeFile } from 'blito-models'
import { BiSolidCopy, BiSolidFolder } from 'react-icons/bi'
import { HiVideoCamera } from 'react-icons/hi'
import { IoCopy } from 'react-icons/io5'

const propsIcons = { size: 24, className: 'text-foreground-600' }

function IconFile({ files, type }: AContent) {
  if (type === ContentType.PROJECT) {
    return <BiSolidFolder {...propsIcons} />
  }

  if (files.length > 1) {
    return <IoCopy {...propsIcons} />
  }

  if (files.length === 0) {
    const [file] = files

    if (
      file?.mimeType.includes('video') ||
      file?.type === TypeFile.VIDEO ||
      file?.type === TypeFile.VIDEO_YOUTUBE
    ) {
      return <HiVideoCamera {...propsIcons} />
    }

    if (file?.mimeType.includes('image')) {
      return <BiSolidCopy {...propsIcons} />
    }
  }

  return null
}

export default IconFile
