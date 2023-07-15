'use client'

import { Box } from '@/app/shared/components'
import Link from 'next/link'
import { CiSettings } from 'react-icons/ci'
import { MdInsights } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { Badge } from '@nextui-org/react'

const Menu = () => {
  return (
    <Box
      css={{
        '& > a': {
          color: '$gray800',
          borderRadius: '$lg',
          padding: '$8',
          textDecoration: 'none',
          transition: 'all .3s',

          display: 'flex',
          alignItems: 'center',
          gap: '12px',

          '&:hover': {
            backgroundColor: '$backgroundContrast',
            color: '$blue900'
          },
          '&.active': {
            color: '$blue900'
          },

          '&.blocked-link': {
            'pointer-events': 'none',
            ursor: 'not-allowed'
          }
        }
      }}
    >
      <Link
        className="active"
        href={{
          pathname: '/configuracion'
        }}
      >
        <CiSettings size={25} />
        General
      </Link>
      <Link
        href={{
          pathname: '/estadisticas'
        }}
        aria-disabled={true}
        className="blocked-link"
      >
        <MdInsights size={25} />
        Estadísticas
        <Badge size="xs">Pronto</Badge>
      </Link>
      <Link
        href={{
          pathname: '/perfil'
        }}
        aria-disabled={true}
        className="blocked-link"
      >
        <CgProfile size={25} />
        Perfil
        <Badge size="xs">Pronto</Badge>
      </Link>
    </Box>
  )
}

export default Menu
