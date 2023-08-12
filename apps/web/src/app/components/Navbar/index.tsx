import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle
} from '@nextui-org/react'
import Link from 'next/link'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AppStore, AuthStore } from '@/redux/store'
import { Text, Grid } from '@/app/shared/ui'

const collapseItems = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Proyectos',
    route: '/proyectos'
  },
  {
    label: 'Contacto',
    route: '/contacto'
  }
]

const NavbarComponent = () => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)

  const navbarCollapseItems = auth.isAuth
    ? [
        ...collapseItems,
        {
          label: 'Configuración',
          route: '/configuracion'
        },
        {
          label: 'Cerrar sesión',
          route: '/logout'
        }
      ]
    : collapseItems

  return (
    <Navbar
      className="bg-opacity-60 backdrop-blur-md bg-[rgba(0, 0, 0, 0.6)]"
      classNames={{
        wrapper: 'bg-none backdrop-blur-none border-b-0'
      }}
      isBordered
      position="sticky"
    >
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
          <Text as="b" className="text-inherit xs:invisible font-bold ml-8">
            Blito
          </Text>
        </Link>
        <Grid sm={0}>
          <NavbarMenuToggle className="mr-8" aria-label="toggle navigation" />
        </Grid>
      </NavbarBrand>
      <NavbarContent className="xs:invisible">
        <Link href="/">Home</Link>
        <Link
          href={{
            pathname: '/categorias'
            // query: { category: 'graffiti' }
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
