'use client'

import { Text } from '@/components'
import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Table
} from '@nextui-org/react'
import Link from 'next/link'
import { BsArrowClockwise } from 'react-icons/bs'
import { BsPlus } from 'react-icons/bs'
import { API } from 'aws-amplify'
import { createCategory } from 'amplify'

const SettingsPage = async () => {
  const handleCreateCategory = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event?.preventDefault()
    await API.graphql({
      authMode: 'API_KEY',
      query: createCategory,
      variables: {
        input: {
          name: 'Interiores',
          description: 'Diseño y arte artístico dentro de casas'
        }
      }
    })

    alert('Categoric agregada')
  }

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Text h2 weight="bold">
          Configuración
          <Link href="/proyectos" style={{ float: 'right' }}>
            <BsArrowClockwise size={25} />
          </Link>
        </Text>
        <Spacer y={2} />
      </Container>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} md={4}>
            <Card css={{ p: '$6' }}>
              <Card.Header>
                <Text h3>Categorías</Text>
                <Button
                  light
                  icon={<BsPlus fill="currentColor" />}
                  color="primary"
                  onClick={handleCreateCategory}
                >
                  Agregar
                </Button>
              </Card.Header>
              <Card.Body>
                <Input
                  placeholder="Next UI"
                  name="name"
                  labelPlaceholder="Nombre"
                  bordered
                />
                <Spacer y={2} />
                <Input
                  placeholder="Next UI"
                  name="description"
                  labelPlaceholder="Descripción"
                  bordered
                />
                <Spacer y={2} />
                <hr />
                <Spacer y={2} />
                <Table
                  aria-label="Example table with static content"
                  css={{
                    height: 'auto',
                    minWidth: '100%'
                  }}
                >
                  <Table.Header>
                    <Table.Column>Nombre</Table.Column>
                    <Table.Column>Descripción</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row key="1">
                      <Table.Cell>Tony Reichert</Table.Cell>
                      <Table.Cell>CEO</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                      <Table.Cell>Zoey Lang</Table.Cell>
                      <Table.Cell>Technical Lead</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                      <Table.Cell>Jane Fisher</Table.Cell>
                      <Table.Cell>Senior Developer</Table.Cell>
                    </Table.Row>
                    <Table.Row key="4">
                      <Table.Cell>William Howard</Table.Cell>
                      <Table.Cell>Community Manager</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={6} md={4}>
            <Card>
              <Card.Body>
                <Text h3>Tags</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={6} md={4}>
            <Card>
              <Card.Body>
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
