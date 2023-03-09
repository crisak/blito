'use client'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import { createTheme, NextUIProvider } from '@nextui-org/react'

import { Navbar, Footer, Box } from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'
import IcoBlitoWhite from '@/assets/images/icon-blito-white.ico'
import { useEffect, useState } from 'react'
import Splash from './components/Splash'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'

import { Amplify } from 'aws-amplify'
import { awsExports } from 'models'

const darkTheme = createTheme({
  type: 'dark'
})

interface RootLayoutProps {
  children: React.ReactNode
}

const $2seconds = 3000

Amplify.configure({ ...awsExports, ssr: false })

console.log('Running in: ', {
  'NODE_ENV->>': process.env.NODE_ENV,
  'APP_ENV->>': process.env.APP_ENV,
  'NEXT_PUBLIC_GMAPS_API_KEY->>': process.env.NEXT_PUBLIC_GMAPS_API_KEY,
  'NEXT_PUBLIC_TEST->>': process.env.NEXT_PUBLIC_TEST,
  'env->>': process.env
})

function RootLayout({ children }: RootLayoutProps): JSX.Element {
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
    <html>
      <head>
        <title>Blitoner</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={IcoBlitoWhite.src}
        />
      </head>
      <body>
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
      </body>
    </html>
  )
}
export default RootLayout
{
  /* <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  closeOnClick
                  pauseOnHover
                /> */
}
