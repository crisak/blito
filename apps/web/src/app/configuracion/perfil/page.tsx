'use client'

import { Box, Container, Text } from '@/app/shared/ui'
import { useAuthStore } from '@/store'

import Image from 'next/image'

const SettingsPage = () => {
  const auth = useAuthStore((state) => state.authSession)

  return (
    <>
      <Container className="p-unit-lg">
        <Text as="h2" className="font-bold">
          Perfil
        </Text>
      </Container>
      <Container className="p-unit-lg">
        <Box className="flex flex-col gap-unit-sm">
          <Text>
            Nombre de usuario <Text as="strong">{auth?.username}</Text>
          </Text>
          <Text>
            Nombre <Text as="strong">{auth?.name}</Text>
          </Text>
          <Text>
            Email <Text as="strong">{auth?.email}</Text>
          </Text>
          <Text>
            Apodo <Text as="strong">{auth?.nickname}</Text>
          </Text>
          {auth?.picture && (
            <Image
              width={100}
              height={100}
              /** TODO - Change image */
              src={
                'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/359765880_763759745751594_1271245204961802521_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=FSfpun9ZcQcAX8pAH2b&_nc_ht=scontent-bog1-1.xx&oh=00_AfBjIHSo05PBBbPqCRKMbTxGObtkZpt_eblq221vB8bo2g&oe=64DE7062' ||
                auth?.picture
              }
              alt="Foto de perfil"
            />
          )}
        </Box>
      </Container>
    </>
  )
}

export default SettingsPage
