'use client'

import { Container, Text } from '@/app/shared/ui'
// import { authSliceActions } from '@/redux/slices'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import { useDispatch } from 'react-redux'
import { useAuthStore } from '@/store'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const router = useRouter()
  // const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const login = useAuthStore((state) => state.login)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleLogin = async () => {
    try {
      setLoading(true)
      await login(formData.username, formData.password)

      // if (userAuth) {
      //   // dispatch(authSliceActions.login(userAuth))
      // }

      toast('Usuario autenticado', {
        type: 'success'
      })

      router.replace('/')
    } catch (error) {
      // await AuthService.logout()
      // dispatch(authSliceActions.logout())

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
      <Container className="flex h-full items-center justify-center">
        <Card className="mx-unit-sm w-full max-w-sm">
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
                    <AiOutlineEye className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <AiOutlineEyeInvisible className="pointer-events-none text-2xl text-default-400" />
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
