'use client'

import { Box, Text } from '@/components'
import AuthCognito from '@/types/AuthCognito'
import { Button, Card, Container, Input, Spacer } from '@nextui-org/react'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // const tmpConfirmCode = async () => {
  //   try {
  //     await Auth.forgotPasswordSubmit(
  //       formData.username,
  //       '067994',
  //       formData.password
  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const handleLogin = async () => {
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
  }

  useEffect(() => {
    console.log('👌 env                         ->', process.env);
    console.log('👌 NEXT_PUBLIC_BLITONER_API    ->', process.env.NEXT_PUBLIC_BLITONER_API);
    console.log('👌 NEXT_PUBLIC_ENABLED_MOCK    ->', process.env.NEXT_PUBLIC_ENABLED_MOCK);
    console.log('👌 NEXT_PUBLIC_LOGIN_USERNAME  ->', process.env.NEXT_PUBLIC_LOGIN_USERNAME);
    console.log('👌 NEXT_PUBLIC_ENV             ->', process.env.NEXT_PUBLIC_ENV);
    console.log('👌 NODE_ENV                    ->', process.env.NODE_ENV);
    console.log('👌 APP_ENV                     ->', process.env.APP_ENV);
  }, []);

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
