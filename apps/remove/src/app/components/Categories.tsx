'use client'

import { CategoriesSummaryContents } from '@/models/categories-summary.models'
import { Button } from '@nextui-org/react'
import { Text, Container } from '@/app/shared/ui'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import SplashPage from '@/assets/images/splah-push.png'
import Image from 'next/image'
import { randomIntFromInterval } from '@/utils'
import Fade from 'react-reveal/Fade'

type CategoriesProps = { categories: CategoriesSummaryContents }

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      {categories.slice(0, 5).map((category, index) => {
        const odd = Boolean((index + 1) % 2)

        const rotate = odd
          ? randomIntFromInterval(0, 268, { isDecimal: true })
          : randomIntFromInterval(266, 352, { isDecimal: true })

        return (
          <ParallaxBanner
            key={index}
            style={{ minHeight: '100vh', height: 'auto' }}
          >
            <ParallaxBannerLayer
              speed={-20}
              scale={[0.9, 1]}
              opacity={[0.5, 0.8]}
            >
              <Image
                src={SplashPage.src as string}
                alt="Photo of background"
                width={900}
                height={900}
                className={`absolute ${
                  odd ? 'left-[-47rem]' : 'right-[-47rem]'
                } top-[15rem] transform rotate-${rotate}`}
              />
            </ParallaxBannerLayer>

            <ParallaxBannerLayer speed={10}>
              <Container>
                <section
                  className={
                    'flex flex-wrap h-auto min-h-screen w-full items-center justify-center gap-6' +
                    odd
                      ? `reverse-section`
                      : ''
                  }
                >
                  <div className="w-full max-w-[300px]">
                    <Fade bottom cascade>
                      <Text as="h2">{category.name}</Text>
                      <Text className="mb-10">{category.description}</Text>
                      <Button>Ver más</Button>
                    </Fade>
                  </div>
                </section>
              </Container>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        )
      })}
    </>
  )
}

export default Categories
