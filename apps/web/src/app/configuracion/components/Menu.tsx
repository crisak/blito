import { Box } from '@/app/shared/ui'
import Link, { type LinkProps } from 'next/link'
import { CiSettings } from 'react-icons/ci'
import { MdInsights } from 'react-icons/md'
import { CgProfile, CgAwards } from 'react-icons/cg'
import { Chip } from '@nextui-org/chip'

import clsx from 'clsx'

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
      'text-primary-foreground/60 no-underline transition-all duration-300',
      'hover:bg-default hover:text-foreground/100',
      className,
      { 'text-primary': active, 'opacity-disabled': props['aria-disabled'] }
    )}
    style={{
      pointerEvents: props['aria-disabled'] ? 'none' : 'auto'
    }}
    {...props}
  />
)

const Menu = () => {
  return (
    <Box>
      <MenuLink active href="/configuracion">
        <CiSettings size={25} />
        General
      </MenuLink>
      <MenuLink href="/estadisticas" aria-disabled={true}>
        <MdInsights size={25} />
        Estadísticas
        <Chip size="sm">Pronto</Chip>
      </MenuLink>
      <MenuLink href="/perfil" aria-disabled={true}>
        <CgAwards size={25} />
        Sorteos
        <Chip size="sm">Pronto</Chip>
      </MenuLink>
      <MenuLink href="/perfil" aria-disabled={true}>
        <CgProfile size={25} />
        Perfil
        <Chip size="sm">Pronto</Chip>
      </MenuLink>
    </Box>
  )
}

export default Menu
