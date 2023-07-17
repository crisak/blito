'use client'

import {
  Button,
  CSS,
  Col,
  Input,
  Loading,
  Row,
  SortDescriptor,
  Spacer,
  Table,
  useCollator,
  useTheme
} from '@nextui-org/react'
import ReactDOMServer from 'react-dom/server'
import { useState } from 'react'
import { Box, Text } from '@/app/shared/components'
import { useAlert } from '@/app/shared/hooks'
import useFetchTags from './useFetchTags'
import { ATag } from '@/models'
import { IconButton } from './IconButton'
import BodyModalError from './BodyModalError'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { CiTrash } from 'react-icons/ci'
import { toast } from 'react-toastify'
import { DomUtil } from '@/utils'
import { useMemo } from 'react'
import HeaderTable from './HeaderTable'

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

type FormTagsProps = {
  containerTableCss?: CSS
}

const FormTags = ({ containerTableCss }: FormTagsProps) => {
  const collator = useCollator({ numeric: true })
  const { theme } = useTheme()
  const [formData, setFormData] = useState(initialFormData)
  const [sortCell, setSortCell] = useState<SortDescriptor>({
    column: '',
    direction: undefined
  })
  const [searchInput, setSearchInput] = useState('')

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

    alert.confirm({
      title: 'Eliminar tag',
      messageButtonAccept: 'Eliminar',
      body: <BodyModalError contents={contents || []} tag={tag} />,
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

  const listFilter = useMemo(() => {
    let list_ = [...list]

    /** Filter element with search input */
    if (searchInput.length > 2) {
      list_ = list_.filter((tag) => {
        /** Ignore properties */
        const { id, _version, _deleted, ...rest } = tag
        const values = Object.values(rest).join(' ').toUpperCase().trim()
        return values.includes(searchInput.toUpperCase().trim())
      })
    }

    /** Sort by column */
    if (sortCell?.column) {
      list_.sort((a, b) => {
        const nameColumn = sortCell.column as keyof ATag
        let first = a[nameColumn]
        let second = b[nameColumn]
        let cmp = collator.compare(first as any, second as any)
        if (sortCell.direction === 'descending') {
          cmp *= -1
        }
        return cmp
      })
    }

    return list_
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, sortCell, searchInput])

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

      <HeaderTable
        css={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Input
          clearable
          bordered
          size="sm"
          name="searchInput"
          placeholder="Búsqueda por palabra"
          disabled={loading.create || loading.update || loading.list}
          onChange={(e) => setSearchInput(e.target.value || '')}
          value={searchInput}
          contentLeft={
            <BsSearch
              width="16"
              height="16"
              fill={theme?.colors.accents6.value}
            />
          }
        />
      </HeaderTable>
      <Table
        bordered
        lined
        headerLined
        sticked
        aria-label="Lista de tags"
        selectionMode="none"
        css={{
          minHeight: 110,
          height: 'auto',
          minWidth: '100%'
        }}
        containerCss={{
          pt: 'none',
          borderRadius: '0 0 $xl $xl',
          borderTop: 'none',
          ...containerTableCss
        }}
        sortDescriptor={sortCell}
        onSortChange={(sortByCell) => setSortCell(sortByCell)}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              allowsSorting={column.uid !== 'actions'}
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
          items={listFilter}
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
