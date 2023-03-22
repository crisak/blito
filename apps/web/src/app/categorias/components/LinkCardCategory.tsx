'use client'

import classNames from 'classnames'
import Image from 'next/image'
// import TilT from 'react-parallax-tilt'
import styles from './../../components/CardImage.module.css'
import { AFile } from '@/models'
import { BORDER_RADIUS } from '@/styles/variables'

export type LinkCardCategoryProps = {
  className?: string
  index?: number
} & AFile

const LinkCardCategory = ({
  className,
  caption,
  data: image,
  index
}: LinkCardCategoryProps) => {
  // const classes = classNames(
  //   {
  //     [styles.parallax_effect_glare_scale]: true
  //   },
  //   className
  // )
  return (
    // <TilT className={classes} perspective={500} scale={1.02}>
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
    // </TilT>
  )
}

export default LinkCardCategory
