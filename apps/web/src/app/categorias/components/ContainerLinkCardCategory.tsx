'use client'

import Box from '@/app/components/Box'
import Link from 'next/link'

type ContainerLinkCardCategoryProps = {
  children: React.ReactElement | React.ReactElement[]
  categoryId: string
}

const ContainerLinkCardCategory = ({
  children,
  categoryId
}: ContainerLinkCardCategoryProps) => {
  return (
    <Box
      css={{
        padding: 0,
        margin: '15px 10px',
        'border-radius': '16px',
        'background-color': 'red'
      }}
    >
      <Link href={`/categorias/${categoryId}`}>{children}</Link>
    </Box>
  )
}

export default ContainerLinkCardCategory
