import { Text, Container, Box } from '@/app/shared/ui'
import { FooterStyle } from './Footer.styles'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsMailbox,
  BsWhatsapp
} from 'react-icons/bs'
import Link from 'next/link'

const LIST_ROUTERS_DISABLED = ['/configuracion', '/contacto']

const Footer = () => {
  const pathname = usePathname()
  /**
   * Example
   * pathname = /categorias/830f3d81-ba5d-453d-85b1-3f2eebd9dfb5/proyectos
   */

  /** TODO - Importa path router from navbar */
  if (LIST_ROUTERS_DISABLED.includes(pathname)) {
    return <></>
  }

  return (
    <FooterStyle className="backdrop-blur-lg backdrop-saturate-150 bg-background/30">
      <Container>
        <Box className="grid grid-cols-3">
          <Box className="flex flex-col gap-3">
            <Text as="h3">Menu</Text>
            <Link
              className="block transition-colors hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block transition-colors hover:text-primary"
              href="/proyectos"
            >
              Projects
            </Link>
            <Link
              className="block transition-colors hover:text-primary"
              href="/contacto"
            >
              Formulario de contacto
            </Link>
            <Link
              className="block transition-colors hover:text-primary"
              href="/login"
            >
              Ingresar como administrado
            </Link>
          </Box>

          <Box className="flex flex-col gap-3">
            <Text as="h3">Información de contacto</Text>

            <Link
              href="https://www.instagram.com/blito.col/"
              target="_blank"
              className="flex items-center transition-colors hover:text-primary"
            >
              <BsInstagram />
              <Text className="ml-3">Instagram</Text>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ"
              target="_blank"
              className="flex items-center transition-colors hover:text-primary"
            >
              <BsYoutube />
              <Text className="ml-3">YouTube</Text>
            </Link>

            <Link
              href="https://www.facebook.com/loxorea"
              target="_blank"
              className="flex items-center transition-colors hover:text-primary"
            >
              <BsFacebook />
              <Text className="ml-3">Facebook</Text>
            </Link>

            <Link
              href="mailto:loxoreacrew@gmail.com"
              target="_blank"
              className="flex items-center transition-colors hover:text-primary"
            >
              <BsMailbox />
              <Text className="ml-3">Email</Text>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=573123574867"
              target="_blank"
              className="flex items-center transition-colors hover:text-primary"
            >
              <BsWhatsapp />
              <Text className="ml-3">Whatsapp</Text>
            </Link>
          </Box>
          <Box className="flex justify-center items-center">
            <Link href="/" className="flex flex-col items-center gap-3">
              <Image
                src={BlitoFrontPage}
                width={40}
                height={40}
                alt="Logo de portada"
                color="red"
              />
              <Text as="h2">Blitoner</Text>
            </Link>
          </Box>
        </Box>
      </Container>
    </FooterStyle>
  )
}

export default Footer
