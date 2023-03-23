import { Card, Col, Row, Button } from '@nextui-org/react'
import { Text } from '@/app/components'
import { AContent } from '@/models'
import { formatDate } from '@/utils'
import Link from 'next/link'

type CardProjectProps = AContent & { categoryId: string }

export const CardProject = ({
  id,
  project,
  files,
  date,
  type,
  categoryId
}: CardProjectProps) => {
  const file = files?.find((file) => {
    if (!file) return
    return Boolean(file.isBanner)
  })

  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {project?.description || ''}
          </Text>
          <Text h3 color="white">
            {project?.name || ''}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={file?.data || files?.[0]?.data || ''}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#0f111466',
          borderTop: '$borderWeights$light solid $gray800',
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  css={{ bg: 'black', br: '50%' }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  {type}
                </Text>
                <Text color="#d1d1d1" size={12}>
                  {formatDate(date)}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded>
                <Link href={`/categorias/${categoryId}/proyectos/${id}`}>
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ver proyecto
                  </Text>
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}
