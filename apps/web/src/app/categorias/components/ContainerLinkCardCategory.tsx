'use client'

import { useAlert } from '@/app/shared/hooks'
import {
  CategoryService,
  type GetAllWithContentResult
} from '@/app/shared/services'
import { Box, Text } from '@/app/shared/ui'
import { categoryActions, headerUIActions } from '@/redux/slices'
import { useAuthStore } from '@/store'
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

type ContainerLinkCardCategoryProps = GetAllWithContentResult

const categoryService = CategoryService.getInstance()

const ContainerLinkCardCategory = (
  category: ContainerLinkCardCategoryProps
) => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const isAuthenticate = useAuthStore((state) => state.isAuthenticate)

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
    if (!isAuthenticate) {
      return null
    }

    return (
      <Box className="z-20 flex w-full justify-end gap-unit-sm pr-unit-sm pt-unit-sm">
        <Button
          className="backdrop-blur-lg backdrop-saturate-150 hover:cursor-pointer"
          variant="ghost"
          color="primary"
          startContent={<AiOutlineDelete />}
          isIconOnly
          onClick={handleRemove}
        />
        <Button
          className="backdrop-blur-lg backdrop-saturate-150 hover:cursor-pointer"
          variant="ghost"
          color="primary"
          startContent={<AiOutlineEdit />}
          isIconOnly
          onClick={handleEdit}
        />
      </Box>
    )
  }

  return (
    <Card isFooterBlurred className="relative h-[300px] w-full">
      {displayActionsAdmin()}
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <h4 className="text-2xl font-medium text-foreground">
          {category.name}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        className="z-0 h-full w-full -translate-y-6 scale-125 object-cover brightness-50"
        src={category.files?.[0]?.data}
        alt={category.files?.[0]?.caption || ''}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black">
            {category.description.slice(0, 38)}
            {' ...'}
          </p>
          <p className="text-tiny text-black">
            {category.files.length} Proyectos
          </p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          <Link href={`/categorias/${category.id}/proyectos`}>Ver más</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ContainerLinkCardCategory
