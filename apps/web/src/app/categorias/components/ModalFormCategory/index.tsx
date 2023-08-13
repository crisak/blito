'use client'

import {
  HeaderUIStore,
  HeaderEvent,
  headerUIActions,
  categoryActions
} from '@/redux/slices'
import { AppStore } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Modal,
  Button,
  Input,
  Textarea,
  Spacer,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'
import { Category } from 'blito-models'
import { CategoryService } from '@/app/shared/services'
import { toast } from 'react-toastify'
import type { GetAllWithContentResult } from '@/app/shared/services/Category.service'
import { Text } from '@/app/shared/ui'

type FDCategory = Pick<Category, 'id' | 'name' | 'description'>

const initialState = {
  id: '',
  name: '',
  description: ''
} as FDCategory

const ModalFormCategory = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FDCategory>(initialState)
  const { onOpen, onOpenChange, onClose } = useDisclosure()

  const dispatch = useDispatch()
  const headerUI = useSelector<
    AppStore,
    HeaderUIStore<GetAllWithContentResult>
  >((state) => state.headerUI)

  const resetForm = () => {
    setFormData(initialState)
  }

  const handlerCloseModel = () => {
    if (
      headerUI.event === HeaderEvent.updateCategory ||
      headerUI.event === HeaderEvent.create
    ) {
      onClose()
    }

    resetForm()
    dispatch(headerUIActions.resetEvent())
  }

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const categoryService = CategoryService.getInstance()

      e.preventDefault()

      setLoading(true)

      let category: Category

      if (headerUI.event === HeaderEvent.updateCategory) {
        if (!headerUI.data?._version) {
          toast('La version del registro no esta especificada', {
            type: 'warning'
          })
          return
        }

        category = await categoryService.update({
          id: formData.id!,
          name: formData.name,
          description: formData.description as string,
          _version: headerUI.data?._version
        })

        dispatch(
          categoryActions.update({
            ...headerUI.data,
            ...category
          })
        )
      } else {
        /** Create record */
        category = await categoryService.create({
          name: formData.name as string,
          description: formData.description as string
        })

        dispatch(
          categoryActions.create({
            ...category,
            files: []
          } as GetAllWithContentResult)
        )
      }

      setLoading(false)

      toast('Categoría guardada exitosamente', {
        type: 'success'
      })

      handlerCloseModel()
    } catch (error) {
      setLoading(false)
      if (error instanceof Error) {
        toast(error?.message || '', {
          type: 'warning'
        })
        return
      }

      toast(`Error internal ${JSON.stringify(error)}`, {
        type: 'error'
      })
    }
  }

  const isValidForm = Boolean(formData.name && formData.description)

  useEffect(() => {
    if (headerUI.event === HeaderEvent.create) {
      onOpen()
    }

    if (headerUI.event === HeaderEvent.updateCategory) {
      if (!headerUI.data?.id) {
        toast('El registro que intenta actualizar no es valida', {
          type: 'warning'
        })
      }

      setFormData({
        id: headerUI.data?.id || '',
        name: headerUI.data?.name || '',
        description: headerUI.data?.description || ''
      })
      onOpen()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerUI.event])

  return (
    <Modal
      backdrop="blur"
      closeButton
      isDismissable={false}
      scrollBehavior="normal"
      className="w-[600px]"
      aria-labelledby="modal-create-category"
      aria-describedby="modal-description"
      onOpenChange={onOpenChange}
    >
      <form onSubmit={handlerSubmit}>
        <ModalHeader>
          <Text id="modal-create-category" className="text-lg">
            Agregar categoría
          </Text>
        </ModalHeader>
        <ModalBody>
          <Spacer y={1} />
          <Input
            fullWidth
            isClearable
            variant="bordered"
            name="name"
            labelPlacement="outside"
            placeholder="Titulo"
            label="Titulo"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <Spacer y={1} />
          <Textarea
            fullWidth
            variant="bordered"
            name="description"
            placeholder="Descripción"
            label="Descripción"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          <Spacer y={1} />
        </ModalBody>
        <ModalFooter>
          <Button variant="flat" color="primary" onPress={handlerCloseModel}>
            Cancelar
          </Button>
          <Button type="submit" disabled={!isValidForm} isLoading={loading}>
            Guardar
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default ModalFormCategory
