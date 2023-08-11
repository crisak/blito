'use client'

import { CategoriesSummaryContents } from '@/models/categories-summary.models'
import { Button, Container, styled } from '@nextui-org/react'
import { Text } from '@/app/shared/components'
import { CategoryContent, SectionCategory } from './Home.styles'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import SplashPage from '@/assets/images/splah-push.png'
import Image from 'next/image'
import { randomIntFromInterval } from '@/utils'
import Fade from 'react-reveal/Fade'

const ImageSplash = styled(Image, {
  position: 'absolute'
})

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
              <ImageSplash
                src={SplashPage.src as string}
                alt="Photo of background"
                width={900}
                height={900}
                css={{
                  left: odd ? '-47rem' : 'auto',
                  right: odd ? 'auto' : '-47rem',
                  top: '15rem',
                  transform: `rotate(${rotate}deg)`
                }}
              />
            </ParallaxBannerLayer>

            <ParallaxBannerLayer speed={10}>
              <Container>
                <SectionCategory className={odd ? `reverse-section` : ''}>
                  <CategoryContent>
                    <Fade bottom cascade>
                      <Text as="h2">{category.name}</Text>
                      <Text className="mb-10">{category.description}</Text>
                      <Button>Ver más</Button>
                    </Fade>
                  </CategoryContent>
                </SectionCategory>
              </Container>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        )
      })}
    </>
  )
}

export default Categories
