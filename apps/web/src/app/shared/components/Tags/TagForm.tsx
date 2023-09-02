'use client'

import { ATag } from '@/models'
import { Button, Input, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { MetadataScreens } from './Tag.constants'

import { Box, ScreenPage } from '@/app/shared/ui'
import { useTagStore } from '@/store'

const initialFormData: ATag = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  _version: 0
}

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
}

const showToastError = (error: unknown) => {
  if (error instanceof Error) {
    toast(error?.message || '', {
      type: 'warning',
      autoClose: false
    })
    return
  }

  toast(`Error interno: ${JSON.stringify(error)}`, {
    type: 'error',
    autoClose: false
  })
}

type TagFormProps = {
  tag?: ATag
}

const TagForm = ({ tag: tagEdit }: TagFormProps) => {
  const screenNavigation = ScreenPage.useScreenPage<MetadataScreens>()

  const [formData, setFormData] = useState(initialFormData)

  const [loading, create, update] = useTagStore((state) => [
    state.loading,
    state.create,
    state.update
  ])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    let response = null

    /** Update */
    if (formData.id) {
      response = await update(formData).catch((error) => {
        showToastError(error)
        return false
      })
    }

    /** Create */
    if (!formData.id) {
      response = await create({
        name: formData.name
      }).catch((error) => {
        showToastError(error)
        return false
      })
    }

    if (response === false) {
      return
    }

    setFormData(initialFormData)
    showToastSuccess()
    screenNavigation.pop()
  }

  const handleCancel = () => {
    setFormData(initialFormData)
    screenNavigation.pop()
  }

  const isValidForm = Boolean(formData.name)

  useEffect(() => {
    if (tagEdit?.id) {
      setFormData(tagEdit)
    }
  }, [tagEdit])

  return (
    <>
      <ScreenPage.Header title={formData.id ? 'Editar Tag' : 'Crear Tag'} />
      <ScreenPage.Body>
        <Spacer y={1} />

        <form
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
          className="flex flex-col gap-unit-lg"
        >
          <Input
            fullWidth
            isClearable
            onClear={() => setFormData({ ...formData, name: '' })}
            variant="bordered"
            name="name"
            label="Nombre del tag"
            disabled={loading === 'create'}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <Box className="flex justify-end gap-unit-md">
            <Button
              type="button"
              variant="light"
              color="primary"
              onPress={handleCancel}
              disabled={loading === 'create' || loading === 'update'}
            >
              Cancelar
            </Button>

            {!formData.id && (
              <Button
                type="submit"
                color="primary"
                disabled={!isValidForm || loading === 'create'}
                isLoading={loading === 'create'}
              >
                Guardar
              </Button>
            )}

            {formData.id && (
              <Button
                type="submit"
                color="primary"
                disabled={!isValidForm || loading === 'update'}
                isLoading={loading === 'update'}
              >
                Actualizar
              </Button>
            )}
          </Box>
        </form>
      </ScreenPage.Body>
    </>
  )
}

export default TagForm
