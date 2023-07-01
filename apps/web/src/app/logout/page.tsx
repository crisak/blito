'use client'

import { authSliceActions } from '@/redux/slices'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Text } from '@/app/components'
import { useRouter } from 'next/navigation'
import AuthService from '@/app/services/Auth.service'

const Logout = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const logout = async () => {
    await AuthService.logout()
    dispatch(authSliceActions.logout())

    router.replace('/')
  }

  useEffect(() => {
    logout()
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
      <Text h2> Cerrando session ... </Text>
    </Box>
  )
}

export default Logout
