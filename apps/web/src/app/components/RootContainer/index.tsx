'use client'

import { Provider as ReduxProvider } from 'react-redux'
import store from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import Splash from '../Splash'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'
import { Box } from '@/app/shared/ui'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import ToastProvider from '../Toast'
import { useAuth } from '@/app/hooks'
import { getAwsExports } from 'blito-models'
import { Amplify } from 'aws-amplify'
import { AlertProvider } from '@/app/shared/hooks'

console.info('⛳️ Client App running in: ', process.env.NEXT_PUBLIC_ENV)

/** This should be configured on Server side but not in the client(WEB) */
Amplify.configure({
  ...getAwsExports(),
  ssr: true,
  API: {
    graphql_headers: async () => {
      return {
        'Accept-Language': 'es-CO',
        'Cache-Control': 'no-store' /** TODO - This not working, make test */
      }
    }
  }
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
      <NextUIProvider>
        <NextThemesProvider>
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
                <ReduxProvider store={store}>
                  <AlertProvider>
                    {splash ? (
                      <Splash />
                    ) : (
                      <>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                      </>
                    )}
                  </AlertProvider>
                </ReduxProvider>
              </ParallaxProvider>
            </ToastProvider>
          </Box>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
export default RootContainer
