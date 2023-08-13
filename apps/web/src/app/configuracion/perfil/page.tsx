'use client'

import { Text, Container, Box } from '@/app/shared/ui'
import { AppStore, AuthStore } from '@/redux/store'

import Image from 'next/image'
import { useSelector } from 'react-redux'

const SettingsPage = () => {
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)
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
            Nombre de usuario <Text as="strong">{auth.user?.username}</Text>
          </Text>
          <Text>
            Nombre <Text as="strong">{auth.user?.name}</Text>
          </Text>
          <Text>
            Apodo <Text as="strong">{auth.user?.nickname}</Text>
          </Text>
          {auth.user?.picture && (
            <Image
              width={100}
              height={100}
              /** TODO - Change image */
              src={
                'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/359765880_763759745751594_1271245204961802521_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=FSfpun9ZcQcAX8pAH2b&_nc_ht=scontent-bog1-1.xx&oh=00_AfBjIHSo05PBBbPqCRKMbTxGObtkZpt_eblq221vB8bo2g&oe=64DE7062' ||
                auth.user?.picture
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
