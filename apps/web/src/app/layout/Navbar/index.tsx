import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/navbar'
import Link from 'next/link'

import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import { AppStore, AuthStore } from '@/redux/store'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const linksPublic = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Categorías',
    route: '/categorias'
  },
  {
    label: 'Galerías',
    route: '/galeria'
  },
  {
    label: 'Contacto',
    route: '/contacto'
  }
]

const linksPrivate = [
  {
    label: 'Configuración',
    route: '/configuracion'
  },
  {
    label: 'Cerrar sesión',
    route: '/logout'
  }
]

const NavbarComponent = () => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center">
            <Image
              src={BlitoFrontPage}
              width={40}
              height={40}
              alt="Logo de portada"
              color="red"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify={auth.isAuth ? 'start' : 'end'}
        className="hidden gap-4 sm:flex"
      >
        {linksPublic.map(({ label, route }) => (
          <NavbarItem key={label + route} isActive={pathname === route}>
            <Link
              color={pathname === route ? 'primary' : 'foreground'}
              href={route}
              aria-current={pathname === route ? 'page' : 'false'}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {auth.isAuth && (
        <NavbarContent justify="end" className="hidden gap-4 sm:flex">
          {linksPrivate.map(({ label, route }) => (
            <NavbarItem key={label + route} isActive={pathname === route}>
              <Link
                color={pathname === route ? 'primary' : 'foreground'}
                aria-current={pathname === route ? 'page' : 'false'}
                href={route}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarMenu>
        {linksPublic.map(({ label, route }) => (
          <NavbarMenuItem key={label + route}>
            <Link color="foreground" href={route}>
              {label}
            </Link>
          </NavbarMenuItem>
        ))}

        {auth.isAuth &&
          linksPrivate.map(({ label, route }) => (
            <NavbarMenuItem key={label + route}>
              <Link
                color={route === '/logout' ? 'danger' : 'foreground'}
                href={route}
                className="w-full text-lg"
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarComponent
