import { Navbar } from '@nextui-org/react'
import Link from 'next/link'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AppStore, AuthStore } from '@/redux/store'
import { Text } from '@/app/shared/components'

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
  const { isDark } = useTheme()
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
      css={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'saturate(180%) blur(10px)',
        '& .nextui-navbar-container': {
          background: 'none',
          backdropFilter: 'none',
          borderBottom: '0px'
        }
      }}
      isBordered={isDark}
      variant="sticky"
    >
      <Navbar.Brand>
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
          <Navbar.Toggle css={{ mr: '$8' }} aria-label="toggle navigation" />
        </Grid>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
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
      </Navbar.Content>
      <Navbar.Content hideIn="xs">
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
      </Navbar.Content>

      <Navbar.Collapse>
        {}
        {navbarCollapseItems.map(({ label, route }) => (
          <Navbar.CollapseItem key={label}>
            <Link href={route}>{label}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
