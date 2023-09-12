'use client'

import { AlertProvider } from '@/app/shared/hooks'
import { Box } from '@/app/shared/ui'
import BgBodyFigures from '@/assets/images/bg-body-figures.jpeg'
import store from '@/redux/store'
import { useAuthStore } from '@/store'
import { LogUtil } from '@/utils'
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

LogUtil.debug('Client App running in: ', process.env.NEXT_PUBLIC_ENV)

/** This should be configured on Server side but not in the client(WEB) */
Amplify.configure({
  ...getAwsExports(process.env.NEXT_PUBLIC_ENV),
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
  const checkAuth = useAuthStore((state) => state.checkAuth)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    let refTimeout: NodeJS.Timeout | null = null

    ;(async () => {
      const start = performance.now()
      await checkAuth()
      const end = performance.now()

      /** Calcula la diferencia entre los dos tiempos en milesegundos */
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

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <></>
  }

  return (
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
                    id="body-container"
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
  )
}
export default RootContainer
