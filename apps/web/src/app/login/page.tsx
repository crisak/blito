'use client'

import { Box, Text } from '@/app/components'
import AuthCognito from '@/types/AuthCognito'
import { Button, Card, Container, Input, Spacer } from '@nextui-org/react'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'blito-models'
import { toast } from 'react-toastify'

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

  const handleLogin = async () => {
    try {
      const auth: AuthCognito = await Auth.signIn(
        formData.username,
        formData.password
      )
      const userAuth = {
        username: auth.username,
        email: auth.attributes.email,
        isAuth: true
      }
      localStorage.setItem('auth', JSON.stringify(userAuth, null, 2))

      toast('Usuario autenticado', {
        type: 'success'
      })
    } catch (error) {
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
                placeholder="Username"
                name="username"
                labelPlaceholder="Username"
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
