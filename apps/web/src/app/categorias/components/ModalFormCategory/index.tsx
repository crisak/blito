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
  useModal,
  Button,
  Input,
  Textarea,
  Loading,
  Spacer
} from '@nextui-org/react'
import { Category } from 'blito-models'
import { CategoryService } from '@/app/services'
import { toast } from 'react-toastify'
import type { GetAllWithContentResult } from '@/app/services/Category.service'
import { Text } from '@/app/components'

type FDCategory = Pick<Category, 'id' | 'name' | 'description'>

const initialState = {
  id: '',
  name: '',
  description: ''
} as FDCategory

const ModalFormCategory = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FDCategory>(initialState)
  const [] = useState({ name: '' })

  const { setVisible, bindings } = useModal()

  const { setVisible: setVisibleAlertRemove, bindings: bindingsRemove } =
    useModal()

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
      setVisible(false)
    }

    if (headerUI.event === HeaderEvent.removeCategory) {
      setVisibleAlertRemove(false)
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

  const handleSubmitRemove = async () => {
    try {
      const categoryService = CategoryService.getInstance()

      setLoading(true)

      let category: Category

      if (!headerUI.data?._version) {
        toast('La version del registro no esta especificada', {
          type: 'warning'
        })
        return
      }

      category = await categoryService.delete({
        id: formData.id!,
        _version: headerUI.data._version
      })

      dispatch(categoryActions.remove(formData.id))

      setLoading(false)

      toast('Categoría eliminada exitosamente', {
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
      setVisible(true)
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
      setVisible(true)
    }

    if (headerUI.event === HeaderEvent.removeCategory) {
      if (!headerUI.data?.id) {
        toast('El registro que intenta eliminar no es valido', {
          type: 'warning'
        })
      }

      setFormData({
        id: headerUI.data?.id || '',
        name: headerUI.data?.name || '',
        description: headerUI.data?.description || ''
      })

      setVisibleAlertRemove(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerUI.event])

  return (
    <>
      <Modal
        blur
        closeButton
        preventClose
        aria-labelledby="modal-remove-category"
        aria-describedby="modal-description"
        onCloseButtonClick={handlerCloseModel}
        {...bindingsRemove}
      >
        <Modal.Header justify="flex-start">
          <Text b id="modal-title" size={20}>
            Eliminar categoría
          </Text>
          <hr />
        </Modal.Header>
        <Modal.Body>
          <Text>
            ¿Estas seguro que deseas eliminar esta categoría
            <Text b> {formData.name}</Text>?
          </Text>
          <Text>Esta acción no se puede deshacer.</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button light color="primary" auto onPress={handlerCloseModel}>
            Cancelar
          </Button>
          <Button
            color="primary"
            auto
            onPress={handleSubmitRemove}
            disabled={!isValidForm}
          >
            {loading && <Loading color="currentColor" size="sm" />}
            {!loading && 'Eliminar'}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        blur
        closeButton
        preventClose
        scroll
        width="600px"
        aria-labelledby="modal-create-category"
        aria-describedby="modal-description"
        onCloseButtonClick={handlerCloseModel}
        {...bindings}
      >
        <form onSubmit={handlerSubmit}>
          <Modal.Header>
            <Text id="modal-create-category" size={18}>
              Agregar categoría
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Spacer y={1} />
            <Input
              fullWidth
              clearable
              bordered
              name="name"
              labelPlaceholder="Titulo"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
            <Spacer y={1} />
            <Textarea
              fullWidth
              bordered
              name="description"
              labelPlaceholder="Descripción"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
            />
            <Spacer y={1} />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="primary" onPress={handlerCloseModel}>
              Cancelar
            </Button>
            <Button type="submit" auto disabled={!isValidForm}>
              {loading && <Loading color="currentColor" size="sm" />}
              {!loading && 'Guardar'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default ModalFormCategory
