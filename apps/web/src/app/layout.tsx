import IcoBlitoWhite from '@/assets/images/icon-blito-white.ico'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'models'
import { RootContainer } from './components'

Amplify.configure({
  ...getAwsExports(),
  ssr: false,
  API: {
    graphql_headers: async () => {
      return {
        'Accept-Language': 'es-CO'
      }
    }
  }
})

console.info('⛳️ App running in: ', process.env.NEXT_PUBLIC_ENV)

interface RootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
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
