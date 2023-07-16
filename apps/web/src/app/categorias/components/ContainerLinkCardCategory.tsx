'use client'

import Link from 'next/link'
import { Card, Col, Row, Button } from '@nextui-org/react'
import { Box, Text } from '@/app/shared/components'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { AuthStore, headerUIActions, categoryActions } from '@/redux/slices'
import { AppStore } from '@/redux/store'
import {
  CategoryService,
  type GetAllWithContentResult
} from '@/app/shared/services'
import { useAlert } from '@/app/shared/hooks'
import { toast } from 'react-toastify'

type ContainerLinkCardCategoryProps = GetAllWithContentResult

const categoryService = CategoryService.getInstance()

const ContainerLinkCardCategory = (
  category: ContainerLinkCardCategoryProps
) => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const auth = useSelector<AppStore, AuthStore>((state) => state.auth)

  const removeCategory = async () => {
    try {
      if (!category._version) {
        toast('La version del registro no esta especificada', {
          type: 'warning'
        })
        return false
      }

      await categoryService.delete({
        id: category.id!,
        _version: category._version
      })

      dispatch(categoryActions.remove(category.id))

      toast('Categoría eliminada exitosamente', {
        type: 'success'
      })

      return true
    } catch (error) {
      if (error instanceof Error) {
        toast(error?.message || '', {
          type: 'warning'
        })
        return false
      }

      toast(`Error internal ${JSON.stringify(error)}`, {
        type: 'error'
      })

      return false
    }
  }

  const handleRemove = () => {
    alert.confirm({
      title: 'Eliminar categoría',
      body: (
        <>
          <Text>
            ¿Estas seguro que deseas eliminar esta categoría
            <Text b> {category.name}</Text>?
          </Text>
          <Text>Esta acción no se puede deshacer.</Text>
        </>
      ),
      messageButtonAccept: 'Eliminar',
      asyncFn: removeCategory
    })
  }

  const handleEdit = () => {
    dispatch(headerUIActions.setEventUpdateCategory(category))
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
            {category.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={category.files?.[0]?.data}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={category.files?.[0]?.caption || ''}
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
              {category.description.slice(0, 38)}
              {' ...'}
            </Text>
            <Text color="#000" size={12}>
              {category.files.length} Proyectos
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded>
                <Link href={`/categorias/${category.id}/proyectos`}>
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
