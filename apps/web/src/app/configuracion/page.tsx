'use client'

import { Box, Text } from '@/app/components'
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
import { BsArrowClockwise, BsPlus } from 'react-icons/bs'
import { API, Storage } from 'aws-amplify'
import { createCategory } from 'blito-models'

function convertToCSV(arr: any[], header: any[]) {
  const csv = arr.map((row) => {
    return Object.values(row)
      .map((value) => {
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`
        } else {
          return value
        }
      })
      .join(',')
  })
  csv.unshift(header.join(',')) // Agrega las cabeceras
  return csv.join('\n')
}

const SettingsPage = () => {
  const handleCreateCategory = async () => {
    try {
      const data = await API.graphql({
        query: createCategory,
        variables: {
          input: {
            name: 'Interiores',
            description: 'Diseño y arte artístico dentro de casas'
          }
        }
      })

      alert('Categoric agregada')
    } catch (error) {
      console.error('error->', error)
    }
  }

  const handleGetViewMetrics = async () => {}

  const downloadMetrics = async () => {
    try {
      const stringData = new Date().toISOString().substring(0, 16)

      const data = [
        { name: 'Uno', total: 1, mobile: 11, desktop: 44 },
        { name: 'dos', total: 2, mobile: 22, desktop: 44 },
        { name: 'Tres', total: 3, mobile: 333, desktop: 44 },
        { name: 'cuatro', total: 4, mobile: 333, desktop: 444 }
      ]

      const csv = convertToCSV(data, ['Page', 'Total', 'Mobile', 'Desktop'])

      const result = await Storage.put(`${stringData}.csv`, csv, {
        level: 'private',
        contentType: 'text/csv'
      })

      const url = await Storage.get(`${stringData}.csv`, { level: 'private' })

      alert('Ok' + url)
    } catch (error) {
      console.error('🚨>', error)
    }
  }

  return (
    <>
      <Container>
        <Spacer y={2} />
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text h2 weight="bold">
            Configuración
          </Text>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <Button size="sm" onClick={downloadMetrics}>
              Download metrics
            </Button>
            <Button size="sm" onClick={handleGetViewMetrics}>
              View metrics
            </Button>
            <Link href="/proyectos" style={{ float: 'right' }}>
              <BsArrowClockwise size={25} />
            </Link>
          </Box>
        </Box>

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
                <Button
                  light
                  icon={<BsPlus fill="currentColor" />}
                  color="primary"
                  onClick={handleCreateCategory}
                >
                  Ver métricas
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
