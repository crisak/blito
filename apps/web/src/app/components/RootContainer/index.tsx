'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider as ReduxProvider } from 'react-redux'
import store from '@/redux/store'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import { ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import Splash from '../Splash'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'
import Box from '../Box'
import NavbarComponent from '../Navbar'
import Footer from '../Footer'
import ToastProvider from '../Toast'
import { useAuth } from '@/app/hooks'

console.info('⛳️ App running in: ', process.env.NEXT_PUBLIC_ENV)

const darkTheme = createTheme({
  type: 'dark'
})

const $3seconds = 3000

interface RootContainerProps {
  children: React.ReactNode
}

function RootContainer({ children }: RootContainerProps): JSX.Element {
  const [splash, setSplash] = useState(true)
  const { initAuth } = useAuth()

  useEffect(() => {
    let refTimeout: NodeJS.Timeout | null = null

    ;(async () => {
      const start = performance.now()
      await initAuth()
      const end = performance.now()

      // Calcula la diferencia entre los dos tiempos en milisegundos
      const time = end - start

      if (time >= $3seconds) {
        setSplash(false)
        return
      }

      refTimeout = setTimeout(() => {
        setSplash(false)
      }, time)
    })()

    return () => {
      if (refTimeout) {
        clearTimeout(refTimeout)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Box
        className="body-container"
        css={{
          backgroundImage: `url(${BgBodyFigures.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          height: '100vh',
          overflow: 'auto',
          width: '100%'
        }}
      >
        <ToastProvider>
          <ParallaxProvider>
            <NextUIProvider theme={darkTheme}>
              <ReduxProvider store={store}>
                {splash ? (
                  <Splash />
                ) : (
                  <>
                    <NavbarComponent />
                    <main>{children}</main>
                    <Footer />
                  </>
                )}
              </ReduxProvider>
            </NextUIProvider>
          </ParallaxProvider>
        </ToastProvider>
      </Box>
    </>
  )
}
export default RootContainer
{
}
