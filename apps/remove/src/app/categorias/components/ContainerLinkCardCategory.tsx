'use client'

import Link from 'next/link'
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter
} from '@nextui-org/react'
import { Box, Text, Row, Col } from '@/app/shared/ui'
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
import Image from 'next/image'

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
            <Text as="b"> {category.name}</Text>?
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
          paddingTop: '$8'
          // '& button': {
          //   bgBlur: 'rgba(0, 0, 0, 0.053)',
          //   opacity: 0.5,
          //   '&:hover': {
          //     opacity: 1,
          //     cursor: 'pointer',
          //     bgBlur: '$primary'
          //   }
          // }
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          color="primary"
          startContent={<AiOutlineDelete />}
          onClick={handleRemove}
        />
        <Button
          variant="ghost"
          size="sm"
          color="primary"
          startContent={<AiOutlineEdit />}
          onClick={handleEdit}
        />
      </Box>
    )
  }

  return (
    <Card className="w-full h-400px">
      {displayActionsAdmin()}
      <CardHeader className="absolute z-10 top-5">
        <Col>
          <Text className="text-xs font-bold uppercase text-white opacity-70">
            {category.name}
          </Text>
        </Col>
      </CardHeader>
      <CardBody className="p-0">
        <Image
          className="w-full h-full object-cover"
          src={category.files?.[0]?.data}
          alt={category.files?.[0]?.caption || ''}
          width={200}
          height={200}
        />
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 right-0 blur bg-[#ffffff66] border-t-[rgba(255, 255, 255, 0.2)] border-[1px]">
        <Row>
          <Col>
            <Text className="text-black text-sm">
              {category.description.slice(0, 38)}
              {' ...'}
            </Text>
            <Text className="text-black text-sm">
              {category.files.length} Proyectos
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button variant="flat">
                <Link href={`/categorias/${category.id}/proyectos`}>
                  Ver más
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default ContainerLinkCardCategory
