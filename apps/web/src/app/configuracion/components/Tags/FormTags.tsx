'use client'

import {
  Button,
  Card,
  Col,
  Input,
  Loading,
  Row,
  Spacer,
  Table,
  Tooltip,
  useTheme
} from '@nextui-org/react'
import { useState } from 'react'
import { Box, Text } from '@/app/shared/components'
import useFetchTags from './useFetchTags'
import { ATag } from '@/models'
import { IconButton } from './IconButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { CiTrash } from 'react-icons/ci'
import { toast } from 'react-toastify'

const initialFormData: ATag = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  _version: 0
}

const columns: Array<{ name: string; uid: keyof ATag | 'actions' }> = [
  { name: 'Nombre', uid: 'name' },
  { name: 'Fecha', uid: 'createdAt' },
  { name: 'ACTIONS', uid: 'actions' }
]

const showToastSuccess = (message = 'Datos guardaos exitosamente') => {
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

const FormTags = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState(initialFormData)
  const { list, loading, update, create } = useFetchTags()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    /** Update */
    if (formData.id) {
      const response = await update(formData).catch((error) => {
        showToastError(error)
        return false
      })

      if (response) {
        setFormData(initialFormData)
        showToastSuccess()
      }
      return
    }

    /** Create */
    const response = await create({
      name: formData.name
    }).catch((error) => {
      showToastError(error)
      return false
    })

    if (response) {
      setFormData(initialFormData)
      showToastSuccess()
    }
  }

  const handleCancel = () => {
    setFormData(initialFormData)
  }

  const renderCell = (tag: ATag, columnKey: keyof ATag | 'actions') => {
    // @ts-ignore
    const cellValue = tag[columnKey]
    switch (columnKey) {
      case 'createdAt':
        return new Date(cellValue).toLocaleDateString()
      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => setFormData(tag)}>
                  <AiOutlineEdit size={20} fill={theme?.colors.neutral.value} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => {
                  setFormData(tag)
                }}
              >
                <IconButton>
                  <CiTrash size={20} fill={theme?.colors.error.value} />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        )
      default:
        return cellValue
    }
  }

  const isValidForm = Boolean(formData.name)

  return (
    <Box>
      <Text h3>Tags</Text>
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

      <Spacer y={2} />
      <Table
        bordered
        lined
        headerLined
        sticked
        aria-label="Example static collection table"
        selectionMode="single"
        containerCss={{
          minHeight: 110
        }}
        onSelectionChange={(item) => {
          const itemSelected: {
            anchorKey: string
            currentKey: string
            size: number
          } = item as any

          if (itemSelected.size && itemSelected.currentKey) {
            const tag = list.find(({ id }) => id === itemSelected.currentKey)
            if (tag) {
              setFormData(tag)
              return
            }
          }

          setFormData(initialFormData)
        }}
        css={{
          height: 'auto',
          minWidth: '100%'
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === 'actions'}
              align={column.uid === 'actions' ? 'center' : 'start'}
              width={
                column.uid === 'createdAt'
                  ? '100'
                  : column.uid === 'actions'
                  ? '71'
                  : undefined
              }
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body
          items={list}
          loadingState={loading.list ? 'loading' : undefined}
        >
          {(item: ATag) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>
                  {renderCell(item, columnKey as keyof ATag | 'actions')}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Box>
  )
}

export default FormTags
