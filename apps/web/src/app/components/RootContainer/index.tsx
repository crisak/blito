'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider } from 'react-redux'
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

const darkTheme = createTheme({
  type: 'dark'
})

const $2seconds = 3000

interface RootContainerProps {
  children: React.ReactNode
}

function RootContainer({ children }: RootContainerProps): JSX.Element {
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    let refTimeout: NodeJS.Timeout | null = null

    refTimeout = setTimeout(() => {
      setSplash(false)
    }, $2seconds)

    return () => {
      if (refTimeout) {
        clearTimeout(refTimeout)
      }
    }
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
              <Provider store={store}>
                {splash ? (
                  <Splash />
                ) : (
                  <>
                    <NavbarComponent />
                    <main>{children}</main>
                    <Footer />
                  </>
                )}
              </Provider>
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
