'use client'

import { Box, Text } from '@/app/components'
import { Button, Card, Container, Input, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'blito-models'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import AuthService from '../services/Auth.service'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '@/redux/slices'

Amplify.configure({
  ...getAwsExports(),
  ssr: true,
  API: {
    graphql_headers: async () => {
      return {
        'Accept-Language': 'es-CO'
      }
    }
  }
})

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const userAuth = await AuthService.login({
        username: formData.username,
        password: formData.password
      })

      if (userAuth) {
        dispatch(authSliceActions.login(userAuth))
      }

      toast('Usuario autenticado', {
        type: 'success'
      })

      router.replace('/')
    } catch (error) {
      await AuthService.logout()
      dispatch(authSliceActions.logout())

      if (error instanceof Error) {
        toast(error?.message || '', {
          type: 'warning'
        })
        return
      }

      toast(`Error internal ${JSON.stringify(error)}`, {
        type: 'error'
      })
    }
  }

  return (
    <>
      <Container>
        <Box
          css={{
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Card
            css={{
              p: '$6',
              maxWidth: '400px'
            }}
          >
            <Card.Header>
              <Text h2 weight="bold">
                Login
              </Text>
            </Card.Header>
            <Card.Body>
              <Spacer y={1} />
              <Input
                type="email"
                placeholder="Correo"
                name="username"
                labelPlaceholder="Correo"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                value={formData.username}
                bordered
              />
              <Spacer y={2} />
              <Input.Password
                type="password"
                placeholder="Password"
                name="password"
                labelPlaceholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                bordered
              />

              <Spacer y={2} />
              <Button onClick={handleLogin}>Login</Button>
            </Card.Body>
          </Card>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
