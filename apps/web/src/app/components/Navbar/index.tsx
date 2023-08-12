import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'

import Link from 'next/link'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AppStore, AuthStore } from '@/redux/store'
import { Text, Grid } from '@/app/shared/ui'
import { useState } from 'react'

// const collapseItems = [
//   {
//     label: 'Home',
//     route: '/'
//   },
//   {
//     label: 'Proyectos',
//     route: '/proyectos'
//   },
//   {
//     label: 'Contacto',
//     route: '/contacto'
//   }
// ]

const NavbarComponent = () => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const navbarCollapseItems = auth.isAuth
  //   ? [
  //       ...collapseItems,
  //       {
  //         label: 'Configuración',
  //         route: '/configuracion'
  //       },
  //       {
  //         label: 'Cerrar sesión',
  //         route: '/logout'
  //       }
  //     ]
  //   : collapseItems

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link
            href={{
              pathname: '/'
            }}
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image
              src={BlitoFrontPage}
              width={40}
              height={40}
              alt="Logo de portada"
              color="red"
            />
          </Link>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link
            href={{
              pathname: '/'
            }}
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image
              src={BlitoFrontPage}
              width={40}
              height={40}
              alt="Logo de portada"
              color="red"
            />
          </Link>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )

  return (
    <Navbar
      className="bg-opacity-60 backdrop-blur-md bg-[rgba(0, 0, 0, 0.6)]"
      isBordered
      position="sticky"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link
            href={{
              pathname: '/'
            }}
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
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

      <NavbarContent className="xs:invisible">
        <Link href="/">Home</Link>
        <Link
          href={{
            pathname: '/categorias'
          }}
        >
          Categorías
        </Link>
        <Link href="/galeria">Galería</Link>
        <Link href="/contacto">Contacto</Link>
      </NavbarContent>
      <NavbarContent className="xs:invisible">
        {auth.isAuth && (
          <Link color="inherit" href="/configuracion">
            Configuración
          </Link>
        )}

        {auth.isAuth && (
          <Link color="inherit" href="/logout">
            Cerrar sesión
          </Link>
        )}
      </NavbarContent>

      {/* <NavbarCollapse>
        {}
        {navbarCollapseItems.map(({ label, route }) => (
          <Navbar.CollapseItem key={label}>
            <Link href={route}>{label}</Link>
          </Navbar.CollapseItem>
        ))}
      </NavbarCollapse> */}
    </Navbar>
  )
}

export default NavbarComponent
