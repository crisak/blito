'use client'

import { Text } from '@/app/shared/ui'
import Image from 'next/image'
import BlitoFrontPage from '@/assets/images/home-blito_bg_white.png'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <header className="flex min-h-[calc(100vh-4rem)] h-auto w-full items-center justify-center flex-col gap-4">
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
    </header>
  )
}

export default Header
