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
  Text,
  Input,
  Textarea,
  Loading,
  Spacer
} from '@nextui-org/react'
import { Category } from 'blito-models'
import { CategoryService } from '@/app/services'
import { toast } from 'react-toastify'
import { useAuth } from '@/app/hooks'

type FDCategory = Pick<Category, 'id' | 'name' | 'description' | '_version'>

const initialState = {
  id: '',
  name: '',
  description: '',
  _version: 0
} as FDCategory

const ModalFormCategory = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Category>>(initialState)

  const { initAuth } = useAuth()
  const dispatch = useDispatch()
  const { setVisible, bindings } = useModal()
  const headerUI = useSelector<AppStore, HeaderUIStore<FDCategory>>(
    (state) => state.headerUI
  )

  const resetForm = () => {
    setFormData(initialState)
  }

  const handlerCloseModel = () => {
    if (headerUI.event === HeaderEvent.updateCategory) {
      resetForm()
    }

    dispatch(headerUIActions.resetEvent())
    setVisible(false)
  }

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const categoryService = CategoryService.getInstance()

      e.preventDefault()

      setLoading(true)

      let category: Category

      if (headerUI.event === HeaderEvent.updateCategory) {
        if (!formData._version) {
          toast('La version del registro no esta especificada', {
            type: 'warning'
          })
          return
        }
        category = await categoryService.update({
          id: formData.id!,
          name: formData.name,
          description: formData.description as string,
          _version: formData._version
        })
        dispatch(categoryActions.update(category))
      } else {
        /** Create record */
        category = await categoryService.create({
          name: formData.name as string,
          description: formData.description as string
        })
        dispatch(categoryActions.create(category))
      }

      setLoading(false)

      dispatch(headerUIActions.resetEvent())
      toast('Categoría guardada exitosamente', {
        type: 'success'
      })

      resetForm()
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
        id: headerUI.data?.id,
        name: headerUI.data?.name,
        description: headerUI.data?.description,
        _version: headerUI.data?._version
      })
      setVisible(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerUI.event])

  useEffect(() => {
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            Cancel
          </Button>
          <Button type="submit" auto disabled={!isValidForm}>
            {loading && <Loading color="currentColor" size="sm" />}
            {!loading && 'Guardar'}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default ModalFormCategory
