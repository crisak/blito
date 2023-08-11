'use client'

import { Text } from '@/app/shared/components'
import Image from 'next/image'
import { Header as HeaderStyle } from './Home.styles'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <HeaderStyle>
      <Fade bottom>
        <Image
          src={BlitoFrontPage}
          width={100}
          height={110}
          alt="Logo de portada"
          color="red"
        />
      </Fade>

      <Text as="h1" className="text-7xl">
        <Fade bottom>Blito</Fade>
      </Text>
      <Text as="h2" className="text-center">
        <Fade bottom>Deja entrar el color a tu vida</Fade>
      </Text>
    </HeaderStyle>
  )
}

export default Header
