'use client'

import { useAuth } from '@/app/hooks'
import { AlertProvider } from '@/app/shared/hooks'
import { Box } from '@/app/shared/ui'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'
import store from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'blito-models'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import Splash from '../Splash'
import ToastProvider from '../Toast'

// eslint-disable-next-line no-console
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
          <ToastProvider>
            <ParallaxProvider>
              <ReduxProvider store={store}>
                <AlertProvider>
                  {splash ? (
                    <Splash />
                  ) : (
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
                      <Navbar />
                      <main>{children}</main>
                      <Footer />
                    </Box>
                  )}
                </AlertProvider>
              </ReduxProvider>
            </ParallaxProvider>
          </ToastProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
export default RootContainer
