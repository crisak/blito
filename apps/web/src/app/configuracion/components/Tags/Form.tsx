'use client'

import { Button, Input, Loading, Spacer } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { Box, Text } from '@/app/shared/components'
import { useScreenNavigation } from '@/app/shared/hooks'
import useFetchTags from './useFetchTags'
import { ATag } from '@/models'
import { BsChevronLeft } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { MetadataScreens } from './constants'

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

type FormProps = {
  tag?: ATag
}

const Form = ({ tag: tagEdit }: FormProps) => {
  const screenNavigation = useScreenNavigation<MetadataScreens>()

  const [formData, setFormData] = useState(initialFormData)

  const { loading, update, create } = useFetchTags({
    initialLoad: false
  })

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
    <Box>
      <Box
        css={{
          display: 'flex',
          gap: '$7',
          alignItems: 'center'
        }}
      >
        <Button
          light
          auto
          size="sm"
          color="default"
          icon={<BsChevronLeft fill="currentColor" size={25} />}
          onClick={() => {
            screenNavigation.pop()
          }}
        />

        <Text h3 css={{ margin: 0 }}>
          Tags
        </Text>
      </Box>

      <Spacer y={2} />
      <form onSubmit={handleSubmit}>
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$10' }}>
          <Input
            fullWidth
            clearable
            bordered
            name="name"
            labelPlaceholder="Nombre del tag"
            disabled={loading.create}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <Box
            css={{ display: 'flex', gap: '$10', justifyContent: 'flex-end' }}
          >
            <Button
              type="button"
              light
              color="primary"
              auto
              onPress={handleCancel}
              disabled={loading.create || loading.update}
            >
              Cancelar
            </Button>

            {!formData.id && (
              <Button
                type="submit"
                auto
                disabled={!isValidForm || loading.create}
              >
                {loading.create && <Loading color="currentColor" size="sm" />}
                {!loading.create && 'Guardar'}
              </Button>
            )}

            {formData.id && (
              <Button
                type="submit"
                auto
                disabled={!isValidForm || loading.update}
              >
                {loading.update && <Loading color="currentColor" size="sm" />}
                {!loading.update && 'Actualizar'}
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Form
