'use client'

import Image from 'next/image'
import { AFile } from '@/models/ModelsAdapter.model'
import { BORDER_RADIUS } from '@/styles/variables'

export type LinkCardCategoryProps = {
  className?: string
  index?: number
} & AFile

const LinkCardCategory = ({
  caption,
  data: image,
  index
}: LinkCardCategoryProps) => {
  return (
    <Image
      src={image}
      alt={caption || 'Imagen de proyecto de modo de Banner'}
      width={150}
      height={150}
      blurDataURL="data:..."
      style={{
        borderRadius: BORDER_RADIUS,
        left: `${index}.4rem}`
      }}
    />
  )
}

export default LinkCardCategory
