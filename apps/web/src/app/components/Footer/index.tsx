'use client'

import { Text, Row, Container, Grid } from '@/app/shared/ui'
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

const LIST_ROUTERS_DISABLED = ['/configuracion']

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
    <FooterStyle className="bg-[#0000008e] blur">
      <Container>
        <Grid.Container gap={2}>
          <Grid md direction="column">
            <Text as="h3">Menu</Text>

            <Row className="flex flex-col gap-5">
              <Link className="block" href="/">
                Home
              </Link>
              <Link className="block" href="/proyectos">
                Projects
              </Link>
              <Link className="block" href="/contacto">
                Formulario de contacto
              </Link>
              <Link className="block" href="/login">
                Ingresar como administrado
              </Link>
            </Row>
          </Grid>

          <Grid md direction="column">
            <Text as="h3">Información de contacto</Text>

            <Link
              href="https://www.instagram.com/blito.col/"
              target="_blank"
              className="block mb-2.5"
            >
              <Row align="center">
                <BsInstagram />
                <Text className="ml-5">Instagram</Text>
              </Row>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCesHX161bu3qh0qJut11vzQ"
              target="_blank"
              className="block mb-2.5"
            >
              <Row align="center">
                <BsYoutube />
                <Text className="ml-5">YouTube</Text>
              </Row>
            </Link>

            <Link
              href="https://www.facebook.com/loxorea"
              target="_blank"
              className="block mb-2.5"
            >
              <Row align="center">
                <BsFacebook />
                <Text className="ml-5">Facebook</Text>
              </Row>
            </Link>

            <Link
              href="mailto:loxoreacrew@gmail.com"
              target="_blank"
              className="block mb-2.5"
            >
              <Row align="center">
                <BsMailbox />
                <Text className="ml-5">Email</Text>
              </Row>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=573123574867"
              target="_blank"
              className="block mb-2.5"
            >
              <Row align="center">
                <BsWhatsapp />
                <Text className="ml-5">Whatsapp</Text>
              </Row>
            </Link>
          </Grid>

          <Grid
            xs
            direction="column"
            justify="center"
            alignItems="center"
            css={{
              gap: '$5'
            }}
          >
            <Link href="/" className="text-center">
              <Image
                src={BlitoFrontPage}
                width={40}
                height={40}
                alt="Logo de portada"
                color="red"
              />
              <Text as="h2">Blitoner</Text>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </FooterStyle>
  )
}

export default Footer
