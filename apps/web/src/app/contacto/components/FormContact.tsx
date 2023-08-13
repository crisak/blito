'use client'

import { Box, Text } from '@/app/shared/ui'
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import Fade from 'react-reveal/Fade'

const FormContact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Fade right>
      <Box className="h-full p-11 backdrop-blur-lg backdrop-saturate-150 bg-background/50">
        <form onSubmit={handleSubmit}>
          <Box className="flex flex-col gap-4">
            <Text as="h2">Escríbeme</Text>
            <Input variant="underlined" label="Nombre" fullWidth />
            <Input type="email" variant="underlined" label="Correo" fullWidth />
            <Textarea variant="underlined" label="Mensaje" rows={4} fullWidth />
            <Button className="w-full">Enviar</Button>
          </Box>
        </form>
      </Box>
    </Fade>
  )
}

export default FormContact
