'use client'

import { Box, Text } from '@/app/shared/ui'
import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Logout = () => {
  const router = useRouter()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = async () => {
    await logout()

    router.replace('/')
  }

  useEffect(() => {
    handleLogout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
      }}
    >
      <Text as="h2"> Cerrando session ... </Text>
    </Box>
  )
}

export default Logout
