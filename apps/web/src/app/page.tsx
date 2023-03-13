'use client'
import '@/styles/globals.css'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Image from 'next/image'
import { styled } from '@nextui-org/react'
import Header from './components/Header'
import { Box, Text } from './components'
import FloatingSocials from './components/FloatingSocials'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'
import { SectionContainer, Section } from './homeComponents'

const ImageSplash = styled(Image, {
  opacity: '.6',
  position: 'absolute',
  right: '-42rem',
  top: '0'
})

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

      <SectionContainer>
        <Section>
          <Image
            width={400}
            height={400}
            alt="Blito en Grafiti"
            src="https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/187657530_155399266479564_3108326086555607132_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=HImK_nZoFYMAX9O689G&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjU3Nzk0NTgxMDE3NDg3Njk2MQ%3D%3D.2-ccb7-5&oh=00_AfCRppb5PI8bxS83bRAdos8T_xzscMyHYSHWPVQO41lbig&oe=64146BAD&_nc_sid=6136e7"
          />
          <Box>
            <Text h2>Bienvenidos a mi mundo de arte urbano</Text>
            <Text>
              ¡Bienvenidos a mi mundo de arte urbano! Me dedico a la creación de
              tatuajes y graffiti, y estoy comprometido con la transformación de
              la sociedad a través de mi trabajo en proyectos comunitarios.
            </Text>
          </Box>
        </Section>
      </SectionContainer>
    </>
  )
}

export default HomePage
