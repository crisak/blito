import '@/styles/globals.css'
import 'react-image-lightbox/style.css'
import 'react-toastify/dist/ReactToastify.min.css'

import IcoBlitoWhite from '@/assets/images/icon-blito-white.ico'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'blito-models'
import { RootContainer } from './components'

const configAws = getAwsExports()

/** This should be configured on Server side but not in the client(WEB) */
Amplify.configure({
  ...configAws,
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

console.info('⛳️ Server App running in: ', process.env.NEXT_PUBLIC_ENV)

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="es">
      <head>
        <title>Blito</title>
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
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  )
}
export default RootLayout
