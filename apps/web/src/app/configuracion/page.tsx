'use client'

import { Text } from '@/app/shared/components'
import { Card, Container, Grid, Spacer } from '@nextui-org/react'
import { ScreenTags } from './components/Tags'

const MAX_HEIGHT_CARD = 580

const SettingsPage = () => {
  return (
    <>
      <Container>
        <Spacer y={1.5} />
        <Text
          h2
          weight="bold"
          css={{
            padding: '$8'
          }}
        >
          General
        </Text>
        <Spacer y={1.5} />
      </Container>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} md={4}>
            <Card
              css={{
                maxHeight: MAX_HEIGHT_CARD,
                overflow: 'auto'
              }}
            >
              <Card.Body css={{ padding: '$10' }}>
                <ScreenTags
                  height={MAX_HEIGHT_CARD}
                  containerListCss={{
                    maxHeight: MAX_HEIGHT_CARD - 50,
                    overflow: 'auto'
                  }}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={6} md={4}>
            <Card>
              <Card.Body css={{ padding: '$10' }}>
                <Text h3>Colaboradores</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={6} md={4}>
            <Card>
              <Card.Body css={{ padding: '$10' }}>
                <Text h3>Categorías</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default SettingsPage
