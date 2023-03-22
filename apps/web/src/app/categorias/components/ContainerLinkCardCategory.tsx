'use client'

import Link from 'next/link'
import { Card, Col, Row, Button } from '@nextui-org/react'
import { Text } from '@/app/components'
import { AFile } from '@/models'

type ContainerLinkCardCategoryProps = {
  categoryId: string
  name: string
  file: AFile[]
  description: string
}

const ContainerLinkCardCategory = ({
  categoryId,
  name,
  description,
  file
}: ContainerLinkCardCategoryProps) => {
  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={file?.[0]?.data}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={file?.[0]?.caption || ''}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {description.slice(0, 38)}
              {' ...'}
            </Text>
            <Text color="#000" size={12}>
              {file.length} Proyectos
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded>
                <Link href={`/categorias/${categoryId}`}>Ver más</Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ContainerLinkCardCategory
