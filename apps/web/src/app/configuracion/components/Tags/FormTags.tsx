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
  useTheme
} from '@nextui-org/react'
import ReactDOMServer from 'react-dom/server'
import { useState } from 'react'
import { Box, Text } from '@/app/shared/components'
import { useAlert } from '@/app/shared/hooks'
import useFetchTags from './useFetchTags'
import { AFile, ATag } from '@/models'
import { IconButton } from './IconButton'
import { AiOutlineEdit } from 'react-icons/ai'
import { CiTrash } from 'react-icons/ci'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { ContentType, TypeFile } from 'blito-models'
import { DomUtil, StringUtil } from '@/utils'
import Link from 'next/link'
import { GoLinkExternal } from 'react-icons/go'

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

const FormTags = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState(initialFormData)
  const { list, loading, update, create, getContentsByTag, remove } =
    useFetchTags()
  const alert = useAlert()

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

  const processRemove = async (tag: ATag): Promise<boolean> => {
    const response = await remove(tag).catch((error) => {
      showToastError(error)
      return false
    })

    if (response) {
      setFormData(initialFormData)
      showToastSuccess(
        <>
          El tag{' '}
          <Text b color="primary">
            {tag.name}
          </Text>{' '}
          fue eliminado
        </>
      )
    }
    return true
  }

  const handleRemove = async (
    event: React.MouseEvent<HTMLButtonElement>,
    tag: ATag
  ) => {
    let element: HTMLButtonElement = event.target as HTMLButtonElement

    const buttonElement = DomUtil.getParent<HTMLButtonElement>(
      element,
      'button'
    )

    const oldContent = buttonElement?.innerHTML || ''

    if (buttonElement) {
      const logoSvg = ReactDOMServer.renderToString(
        <Loading size="xs" color="error" />
      )

      buttonElement.innerHTML = logoSvg
    }

    const contents = await getContentsByTag(tag).catch((error) => {
      showToastError(error)
      return null
    })

    if (buttonElement) {
      buttonElement.innerHTML = oldContent
    }

    if (contents === null) {
      /** Return null because there is a error to get contents */
      return
    }

    const typeGallery = {
      [ContentType.PROJECT]: 'Proyecto',
      [ContentType.GALLERY]: 'Galería',
      [ContentType.ALBUM]: 'Album'
    }

    alert.confirm({
      title: 'Eliminar tag',
      messageButtonAccept: 'Eliminar',
      body: (
        <>
          {contents.length > 0 && (
            <Text>
              Se encontraron las siguientes galerías con este tag que intentas
              eliminar.
            </Text>
          )}

          {!contents.length && (
            <Text>No se encontraron galerías relacionadas para este tag.</Text>
          )}

          {contents.length > 0 && (
            <>
              <Table
                bordered
                lined
                headerLined
                compact
                shadow={false}
                aria-label={`Lista de galerías con el tag ${tag.name}`}
                css={{
                  height: 'auto',
                  minWidth: '100%'
                }}
              >
                <Table.Header>
                  <Table.Column>Galería</Table.Column>
                  <Table.Column>Tipo</Table.Column>
                  <Table.Column>Nombre</Table.Column>
                  <Table.Column hideHeader>Acciones</Table.Column>
                </Table.Header>

                <Table.Body>
                  {contents.map((ctn) => {
                    const imageWithBanner: AFile | null =
                      ctn.files.find((fil) =>
                        Boolean(fil?.isBanner && fil.data)
                      ) || null

                    const imageWithoutBanner: AFile | null =
                      ctn.files.find((fil) =>
                        Boolean(fil?.data && fil?.type === TypeFile.IMAGE)
                      ) || null

                    const image: AFile = imageWithBanner ||
                      imageWithoutBanner || {
                        data: 'https://www.pngitem.com/pimgs/m/80-801467_gallery-white-gallery-icon-png-transparent-png.png',
                        type: TypeFile.IMAGE,
                        isBanner: true,
                        caption: 'Image por defecto',
                        mimeType: 'image/png'
                      }

                    return (
                      <Table.Row key={ctn.id}>
                        <Table.Cell>
                          <Image
                            src={image.data}
                            alt={image.caption || ctn.project?.name || ''}
                            width={30}
                            height={30}
                            style={{
                              borderRadius: 5
                            }}
                          />
                        </Table.Cell>
                        <Table.Cell>{typeGallery[ctn.type]}</Table.Cell>
                        <Table.Cell>
                          {ctn.project?.name || image.caption || ''}
                        </Table.Cell>
                        <Table.Cell>
                          <Link
                            target="_blank"
                            href={{
                              pathname: `/categorias/${ctn.contentCategoryId}/proyectos/${ctn.id}`
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <GoLinkExternal
                              size={20}
                              fill={theme?.colors.primary.value}
                            />
                          </Link>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table>
            </>
          )}

          <Text>
            Esta seguro de eliminar el siguiente tag{' '}
            <Text b color="primary">
              {tag.name}{' '}
            </Text>{' '}
            ?
          </Text>
        </>
      ),
      asyncFn: () => processRemove(tag)
    })
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
              <IconButton onClick={() => setFormData(tag)}>
                <AiOutlineEdit size={20} fill={theme?.colors.neutral.value} />
              </IconButton>
            </Col>
            <Col css={{ d: 'flex' }}>
              <IconButton onClick={(event) => handleRemove(event, tag)}>
                <CiTrash size={20} fill={theme?.colors.error.value} />
              </IconButton>
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
        selectionMode="none"
        css={{
          minHeight: 110,
          height: 'auto',
          minWidth: '100%'
        }}
        // onSelectionChange={(item) => {
        //   const itemSelected: {
        //     anchorKey: string
        //     currentKey: string
        //     size: number
        //   } = item as any

        //   if (itemSelected.size && itemSelected.currentKey) {
        //     const tag = list.find(({ id }) => id === itemSelected.currentKey)
        //     if (tag) {
        //       setFormData(tag)
        //       return
        //     }
        //   }

        //   setFormData(initialFormData)
        // }}
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
