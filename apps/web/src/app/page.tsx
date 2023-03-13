'use client'
import '@/styles/globals.css'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Image from 'next/image'
import { styled } from '@nextui-org/react'
import Header from './components/Header'
import FloatingSocials from './components/FloatingSocials'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'

const ImageSplash = styled(Image, {
  opacity: '.6',
  position: 'absolute',
  right: '-42rem',
  top: '0'
})

const HomePage = () => {
  return (
    <div className="homea">
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
    </div>
  )
}

export default HomePage
