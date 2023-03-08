'use client'

import { CategoriesSummaryContents } from '@/models/categories-summary.models'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Image from 'next/image'
import { styled } from '@nextui-org/react'
import Header from './Header'
import FloatingSocials from './FloatingSocials'
import { HEIGHT_NAVBAR } from '@/styles/variables'
import Categories from './Categories'
import BlitoFrontPage from '@/assets/images/bg-haeder_home.png'
import SplahPage from '@/assets/images/splah-push.png'
import { useEffect } from 'react'

const ImageSplash = styled(Image, {
  opacity: '.6',
  position: 'absolute',
  right: '-42rem',
  top: '0'
})

const Home = ({ categories }: { categories: CategoriesSummaryContents }) => {
  useEffect(() => {
    console.log('NEXT_PUBLIC_ENV_TEST->>>', process.env.NEXT_PUBLIC_ENV_TEST)
    console.log('NODE_ENV->>', process.env.NODE_ENV);
    console.log('APP_ENV->>', process.env.APP_ENV);
    console.log('env->>', process.env);
  }, [])

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

      <Categories categories={categories} />

      <FloatingSocials />
    </>
  )
}

export default Home
