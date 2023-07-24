'use client'

import { Text } from '@/app/shared/components'
import { Card, Container, Grid, Spacer } from '@nextui-org/react'
import { TagScreen, HEIGHT_FILTER_LIST } from './components/Tags'

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
          <Grid xs={12} md={5}>
            <Card
              css={{
                height: MAX_HEIGHT_CARD,
                overflow: 'hidden'
              }}
            >
              <Card.Body css={{ padding: '$10' }}>
                <TagScreen
                  containerListCss={{
                    height: `calc(100% - ${HEIGHT_FILTER_LIST}px)`,
                    overflow: 'auto'
                  }}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} md={7}>
            <Card>
              <Card.Body css={{ padding: '$10' }}>
                <Text h3>Colaboradores</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default SettingsPage
