'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import { Navbar, Footer, Box } from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import Splash from '../Splash'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'

const darkTheme = createTheme({
  type: 'dark'
})

console.info('⚠️ App running in: ', process.env.NEXT_PUBLIC_ENV)

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
      <ParallaxProvider>
        <NextUIProvider theme={darkTheme}>
          <Provider store={store}>
            {splash ? (
              <Splash />
            ) : (
              <>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </>
            )}
          </Provider>
        </NextUIProvider>
      </ParallaxProvider>
    </Box>
  )
}
export default RootContainer
{
  /* <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  closeOnClick
                  pauseOnHover
                /> */
}
