'use client'
import '@/styles/globals.css'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Image from 'next/image'
import { Button, Card, Spacer, styled } from '@nextui-org/react'
import Header from './components/Header'
import Text from './components/Text'
import FloatingSocials from './components/FloatingSocials'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'
import { Section, SectionContent } from './homeComponents'
import Link from 'next/link'
import Box from './components/Box'

const ImageSplash = styled(Image, {
  opacity: '.6',
  position: 'absolute',
  right: '-42rem',
  top: '0'
})

const content = [
  {
    title: 'Bienvenidos a mi mundo de arte urbano',
    description:
      '¡Bienvenidos a mi mundo de arte urbano! Me dedico a la creación de tatuajes y graffiti, y estoy comprometido con la transformación de la sociedad a través de mi trabajo en proyectos comunitarios.',
    link: '/galeria',
    image: {
      alt: 'Blito en Grafiti',
      src: 'https://www.sanmantattoo.com/wp-content/uploads/2021/10/785BECE3-EA49-4256-9592-C7676F169D90-3.jpg'
    },
    right: true
  },
  {
    title: 'Tatuajes personalizados y únicos',
    description:
      'Si buscas un tatuaje personalizado y único, yo estoy aquí para hacerlo realidad. Soy un artista del tatuaje experimentado y creativo, y estoy dispuesto a trabajar contigo para crear el diseño perfecto que refleje tu estilo y personalidad. Trabajo con las mejores técnicas y materiales para garantizar que obtengas un tatuaje de calidad que dure toda la vida.',
    link: '/categorias/969fba59-a55b-43b2-8a10-3f965a1caf18',
    image: {
      alt: 'Tatuaje en la espalda',
      src: 'https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/187657530_155399266479564_3108326086555607132_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HImK_nZoFYMAX9O689G&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU3Nzk0NTgxMDE3NDg3Njk2MQ%3D%3D.2-ccb7-5&oh=00_AfCRppb5PI8bxS83bRAdos8T_xzscMyHYSHWPVQO41lbig&oe=64146BAD&_nc_sid=6136e7'
    },
    right: false
  },
  {
    title: 'Pintura para locales comerciales y fachadas de edificios',
    description:
      'Además, también ofrezco servicios de pintura para locales comerciales y fachadas de edificios. Con mi experiencia en graffiti y arte urbano, puedo transformar cualquier espacio en un lugar impactante y original que atraiga a tu público y refleje tu marca. Desde la conceptualización hasta la ejecución del proyecto, estaré contigo en cada paso del camino para asegurar que obtengas un resultado final que supere tus expectativas.',
    link: '/categorias/b5e46301-da11-4708-9a1b-4ec8b1392e55',
    image: {
      alt: 'Tatuaje en la espalda',
      src: 'https://www.sanmantattoo.com/wp-content/uploads/2021/10/785BECE3-EA49-4256-9592-C7676F169D90-3.jpg'
    },
    right: true
  },
  {
    title: 'Murales personalizados para empresas',
    description:
      'Si necesitas un mural personalizado para tu empresa, también puedo ayudarte. Pinto murales a gran escala y micro murales, utilizando técnicas avanzadas y mi creatividad como artista. Me adapto a tus necesidades y te ofrezco un servicio completo, desde la conceptualización hasta la ejecución del proyecto, para que obtengas un resultado final que refleje los valores y objetivos de tu empresa.',
    link: '/categorias/a75a503b-cb82-4bc6-80a0-d70fc7ffc9a2',
    image: {
      alt: 'Tatuaje en la espalda',
      src: 'https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/187657530_155399266479564_3108326086555607132_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HImK_nZoFYMAX9O689G&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU3Nzk0NTgxMDE3NDg3Njk2MQ%3D%3D.2-ccb7-5&oh=00_AfCRppb5PI8bxS83bRAdos8T_xzscMyHYSHWPVQO41lbig&oe=64146BAD&_nc_sid=6136e7'
    },
    right: false
  },
  {
    title:
      'Comprometido con la comunidad y la transformación social a través del arte urbano',
    description:
      'Por último, estoy comprometido con la comunidad y creo en el poder del arte para transformar la sociedad. Colaboro con proyectos locales que buscan mejorar la calidad de vida de las personas, y participo activamente en iniciativas que promueven el arte urbano como una forma de expresión y transformación social.',
    link: '/categorias/c72568ef-4974-4e08-bb44-064125d20ebf',
    image: {
      alt: 'Tatuaje en la espalda',
      src: 'https://www.sanmantattoo.com/wp-content/uploads/2021/10/785BECE3-EA49-4256-9592-C7676F169D90-3.jpg'
    },
    right: true
  }
]

const HomePage = () => {
  return (
    <>
      <ParallaxBanner
        style={{ minHeight: `calc(100vh - ${HEIGHT_NAVBAR})`, height: 'auto' }}
      >
        <ParallaxBannerLayer image={BlitoFrontPage.src} speed={-20} />
        <ParallaxBannerLayer speed={10}>
          <ImageSplash
            src={SplahPage.src as string}
            alt="Photo of background"
            width={900}
            height={900}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-5}>
          <Header />
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <FloatingSocials />

      {content.map(({ image, title, description, link, right }) => (
        <Section key={link} invert={right}>
          <Image width={400} height={400} alt={image.alt} src={image.src} />
          <SectionContent>
            <Text h2>{title}</Text>
            <Text> {description} </Text>
            <Spacer y={2} />
            <Button bordered color="primary">
              <Link
                href={{
                  pathname: link
                }}
              >
                Ver galería
              </Link>
            </Button>
          </SectionContent>
        </Section>
      ))}

      <Spacer y={5} />

      <Box
        css={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card
          css={{
            maxWidth: '400px',
            width: '100%',
            padding: '2rem'
          }}
        >
          <Text>
            ¡No esperes más para transformar tu vida y tu entorno con mi arte
            urbano! Contáctame hoy mismo para conocer más acerca de mis
            servicios y agendar una cita para tu tatuaje o para obtener un
            presupuesto para tu proyecto de arte urbano.
          </Text>
        </Card>
      </Box>

      <Spacer y={5} />
    </>
  )
}

export default HomePage
