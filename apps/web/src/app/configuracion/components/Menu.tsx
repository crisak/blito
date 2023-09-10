'use client'

import { Box } from '@/app/shared/ui'
import { Chip } from '@nextui-org/chip'
import Link, { type LinkProps } from 'next/link'
import { CgAwards, CgProfile } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { MdInsights } from 'react-icons/md'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

type MenuLink = LinkProps &
  React.ComponentPropsWithoutRef<'a'> & {
    active?: boolean
    'aria-disabled'?: boolean
  }

const MenuLink = ({ className, active, ...props }: MenuLink) => (
  <Link
    className={clsx(
      'blocked-link:disabled blocked-link:cursor-not-allowed',
      'flex items-center gap-unit-sm rounded-xl px-unit-md py-unit-sm',
      'no-underline transition-all duration-300',
      'hover:bg-default/40 hover:text-foreground/100',
      className,
      {
        'text-primary-foreground/60': !active,
        'text-primary': active,
        'opacity-disabled': props['aria-disabled']
      }
    )}
    style={{
      pointerEvents: props['aria-disabled'] ? 'none' : 'auto'
    }}
    {...props}
  />
)

const Menu = ({ ...props }) => {
  const pathname = usePathname()
  return (
    <Box className="flex flex-row md:flex-col">
      <MenuLink active={pathname === '/configuracion'} href="/configuracion">
        <CiSettings size={25} />
        General
      </MenuLink>

      <MenuLink
        active={pathname === '/configuracion/estadisticas'}
        href="/estadisticas"
        aria-disabled={true}
      >
        <MdInsights size={25} />
        Estadísticas
        <Chip size="sm">Pronto</Chip>
      </MenuLink>

      <MenuLink
        active={pathname === '/configuracion/sorteos'}
        href="/perfil"
        aria-disabled={true}
      >
        <CgAwards size={25} />
        Sorteos
        <Chip size="sm">Pronto</Chip>
      </MenuLink>

      <MenuLink
        active={pathname === '/configuracion/perfil'}
        href="/configuracion/perfil"
      >
        <CgProfile size={25} />
        Perfil
      </MenuLink>
    </Box>
  )
}

export default Menu
