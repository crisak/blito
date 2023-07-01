'use client'

import Link from 'next/link'
import { Card, Col, Row, Button } from '@nextui-org/react'
import { Box, Text } from '@/app/components'
import { AFile } from '@/models/ModelsAdapter.model'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AuthStore, headerUIActions } from '@/redux/slices'
import { AppStore } from '@/redux/store'

type ContainerLinkCardCategoryProps = {
  categoryId: string
  name: string
  file: AFile[]
  description: string
  _version?: number
}

const ContainerLinkCardCategory = ({
  categoryId,
  name,
  description,
  file,
  _version
}: ContainerLinkCardCategoryProps) => {
  const dispatch = useDispatch()
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)

  const handleRemove = () => {
    dispatch(
      headerUIActions.setEventUpdateCategory({
        id: categoryId,
        name,
        description,
        _version
      })
    )
  }

  const handleEdit = () => {
    dispatch(
      headerUIActions.setEventUpdateCategory({
        id: categoryId,
        name,
        description,
        _version
      })
    )
  }

  const displayActionsAdmin = () => {
    if (!auth?.isAuth) {
      return null
    }

    return (
      <Box
        css={{
          width: '100%',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '$3',
          paddingRight: '$8',
          paddingTop: '$8',
          '& button': {
            bgBlur: 'rgba(0, 0, 0, 0.053)',
            opacity: 0.5,
            '&:hover': {
              opacity: 1,
              cursor: 'pointer',
              bgBlur: '$primary'
            }
          }
        }}
      >
        <Button
          ghost
          auto
          size="sm"
          color="primary"
          icon={<AiOutlineDelete />}
          onClick={handleRemove}
        />
        <Button
          ghost
          auto
          size="sm"
          color="primary"
          icon={<AiOutlineEdit />}
          onClick={handleEdit}
        />
      </Box>
    )
  }

  return (
    <Card css={{ w: '100%', h: '400px' }}>
      {displayActionsAdmin()}
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
                <Link href={`/categorias/${categoryId}/proyectos`}>
                  Ver más
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ContainerLinkCardCategory
