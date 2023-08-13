'use client'

import { Box, Container, Text } from '@/app/shared/ui'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer
} from '@nextui-org/react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import AuthService from '@/app/shared/services/Auth.service'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '@/redux/slices'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

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
        <Box className="h-1/2 flex items-center justify-center">
          <Card className="max-w-sm p-6">
            <CardHeader>
              <Text as="h2" className="font-bold">
                Login
              </Text>
            </CardHeader>
            <CardBody>
              <Spacer y={1} />
              <Input
                type="email"
                placeholder="Correo"
                name="username"
                label="Correo"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                value={formData.username}
                variant="bordered"
              />
              <Spacer y={2} />
              <Input
                type={isVisible ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                label="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                variant="bordered"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />

              <Spacer y={2} />
              <Button onClick={handleLogin}>Login</Button>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
