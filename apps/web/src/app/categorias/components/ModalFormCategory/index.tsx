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
  Grid,
  Textarea,
  Loading,
  Spacer
} from '@nextui-org/react'
import { Category } from 'blito-models'
import { CategoryService } from '@/app/services'
import { toast } from 'react-toastify'

const categoryService = CategoryService.getInstance()

const initialState = {
  id: '',
  name: '',
  description: ''
}

const ModalFormCategory = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const headerUI = useSelector<AppStore, HeaderUIStore>(
    (state) => state.headerUI
  )
  const [formData, setFormData] = useState<Partial<Category>>(initialState)

  const { setVisible, bindings } = useModal()

  const handlerCloseModel = () => {
    dispatch(headerUIActions.setEvent(null))
    setVisible(false)
  }

  const resetForm = () => {
    setFormData(initialState)
  }

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      setLoading(true)
      const category = await categoryService.create({
        name: formData.name as string,
        description: formData.description as string
      })
      setLoading(false)

      dispatch(categoryActions.create(category))
      dispatch(headerUIActions.setEvent(null))

      toast('Categoría guardada exitosamente', {
        type: 'success'
      })

      resetForm()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerUI.event])

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
