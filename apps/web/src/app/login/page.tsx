'use client'

import { Container, Text } from '@/app/shared/ui'
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
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
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
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Container className="h-full flex items-center justify-center">
        <Card className="max-w-sm w-full mx-unit-sm">
          <CardHeader className="px-unit-5">
            <Text as="h2" className="font-bold">
              Login
            </Text>
          </CardHeader>
          <CardBody className="flex flex-col gap-7">
            <Input
              type="email"
              name="username"
              label="Correo"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.username}
              variant="bordered"
            />

            <Input
              type={isVisible ? 'text' : 'password'}
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

            <Button color="primary" onClick={handleLogin} isLoading={loading}>
              Login
            </Button>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default LoginPage
