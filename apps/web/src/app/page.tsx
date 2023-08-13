'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Image from 'next/image'
import { Button, Card, Spacer } from '@nextui-org/react'
import Header from './components/Header'
import FloatingSocials from './components/FloatingSocials'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'
import { Section, SectionContent } from './homeComponents'
import Link from 'next/link'
import { Box, Text } from '@/app/shared/ui'

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
      src: 'https://www.okchicas.com/wp-content/uploads/2023/04/15-Tatuajes-para-mostrar-tu-guerrera-interior-sin-temerle-al-exito.jpg'
    },
    right: false
  },
  {
    title: 'Pintura para locales comerciales y fachadas de edificios',
    description:
      'Además, también ofrezco servicios de pintura para locales comerciales y fachadas de edificios. Con mi experiencia en graffiti y arte urbano, puedo transformar cualquier espacio en un lugar impactante y original que atraiga a tu público y refleje tu marca. Desde la conceptualización hasta la ejecución del proyecto, estaré contigo en cada paso del camino para asegurar que obtengas un resultado final que supere tus expectativas.',
    link: '/categorias/b5e46301-da11-4708-9a1b-4ec8b1392e55',
    image: {
      alt: 'Pintura para locales',
      src: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/359730287_765168148944087_1529726381198561471_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=8URm_D6ZZNAAX-MXK-C&_nc_ht=scontent-bog1-1.xx&oh=00_AfCFC21SWvemcotdgNiVAxVSJJJKBeojLEfNxQHmWmCSEw&oe=64DE4822'
    },
    right: true
  },
  {
    title: 'Murales personalizados para empresas',
    description:
      'Si necesitas un mural personalizado para tu empresa, también puedo ayudarte. Pinto murales a gran escala y micro murales, utilizando técnicas avanzadas y mi creatividad como artista. Me adapto a tus necesidades y te ofrezco un servicio completo, desde la conceptualización hasta la ejecución del proyecto, para que obtengas un resultado final que refleje los valores y objetivos de tu empresa.',
    link: '/categorias/a75a503b-cb82-4bc6-80a0-d70fc7ffc9a2',
    image: {
      alt: 'Murales para empresas',
      src: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/316043381_582095477251356_9007516511014643742_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Jv6iP5zqqHcAX9BTcaO&_nc_ht=scontent-bog1-1.xx&oh=00_AfBI8LJZCRSN4HGmuGAlL9ECOtjDrlZgh_uU1gJVlTI0dA&oe=64DD3C88'
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
          <Image
            src={SplahPage.src as string}
            alt="Photo of background"
            width={900}
            height={900}
            className="absolute opacity-60"
            style={{
              right: '-42rem',
              top: '0'
            }}
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
            <Text as="h2">{title}</Text>
            <Text> {description} </Text>
            <Spacer y={2} />
            <Button variant="bordered" color="primary">
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
        <Card className="max-w-[400px] w-full p-8 mx-3 mb-32">
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
