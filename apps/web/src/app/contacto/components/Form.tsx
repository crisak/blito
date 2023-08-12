import { Box, Text, Grid } from '@/app/shared/ui'
import { Button, Input, Textarea } from '@nextui-org/react'
import Fade from 'react-reveal/Fade'

const Form = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Box className="p-11">
      <form onSubmit={handleSubmit}>
        <Fade right>
          <Grid.Container gap={4}>
            <Grid xs={12}>
              <Fade bottom>
                <Text as="h2">Escríbeme</Text>
              </Fade>
            </Grid>
            <Grid xs={12}>
              <Input variant="underlined" label="Nombre" fullWidth />
            </Grid>
            <Grid xs={12}>
              <Input
                type="email"
                variant="underlined"
                label="Correo"
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                variant="underlined"
                label="Mensaje"
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid>
              <Fade bottom>
                <Button className="w-full">Enviar</Button>
              </Fade>
            </Grid>
          </Grid.Container>
        </Fade>
      </form>
    </Box>
  )
}

export default Form
