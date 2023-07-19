'use client'
import { useAlert, useScreenNavigation } from '@/app/shared/hooks'
import {
  Button,
  Input,
  Loading,
  SortDescriptor,
  Table,
  useCollator,
  useTheme
} from '@nextui-org/react'
import { MetadataScreens, SCREENS } from './constants'
import HeaderFilterTable from './HeaderFilterTable'
import { useState, useMemo } from 'react'
import useFetchTags from './useFetchTags'
import { ATag } from '@/models'
import { BsSearch } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'
import ReactDOMServer from 'react-dom/server'
import { toast } from 'react-toastify'
import { Flex, Text } from '@/app/shared/components'
import { DomUtil } from '@/utils'
import BodyModalError from './BodyModalError'

const columns: Array<{ name: string; uid: keyof ATag | 'actions' }> = [
  { name: 'Nombre', uid: 'name' },
  { name: 'Fecha', uid: 'createdAt' }
]

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

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
}

const List = () => {
  const { theme } = useTheme()
  const collator = useCollator({ numeric: true })
  const alert = useAlert()
  const [searchInput, setSearchInput] = useState('')
  const screenNavigation = useScreenNavigation<MetadataScreens>()
  const [itemsSelected, setItemsSelected] = useState<ATag[]>([])
  const [sortCell, setSortCell] = useState<SortDescriptor>({
    column: '',
    direction: undefined
  })
  const { list, loading, getContentsByTag, remove } = useFetchTags()

  const processRemove = async (tag: ATag): Promise<boolean> => {
    const response = await remove(tag).catch((error) => {
      showToastError(error)
      return false
    })

    if (response) {
      // setFormData(initialFormData)
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

  const handleEdit = (tag: ATag) => {
    screenNavigation.push<{ tag: ATag }>(SCREENS.formTags, { tag })
  }

  const renderCell = (tag: ATag, columnKey: keyof ATag | 'actions') => {
    // @ts-ignore
    const cellValue = tag[columnKey]
    switch (columnKey) {
      case 'name':
        return (
          <Text
            span
            color={'primary'}
            css={{
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => handleEdit(tag)}
          >
            {cellValue}
          </Text>
        )
      case 'createdAt':
        return new Date(cellValue).toLocaleDateString()

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

  const indexList = useMemo(() => {
    const indexObject: Record<ATag['id'], ATag> = {}
    list.forEach((tag) => {
      indexObject[tag.id] = tag
    })
    return indexObject
  }, [list])

  return (
    <>
      <HeaderFilterTable>
        <Flex direction={'column'} gap="$xl">
          <Flex justify="space-between" align="center">
            {/* Title */}
            <Flex gap="$sm" align="center">
              <Text h3 css={{ margin: 0 }}>
                Tags
              </Text>
              <Text span css={{ margin: 0 }}>
                ({list.length}
                {itemsSelected.length > 0 ? `/${itemsSelected.length}` : ''})
              </Text>
            </Flex>
            {/* Button actions */}
            <Flex gap="$md" align="center">
              {itemsSelected.length > 0 && (
                <Button
                  auto
                  light
                  size="sm"
                  color="error"
                  icon={<BiTrashAlt fill="currentColor" />}
                  onClick={(event) => handleRemove(event, itemsSelected[0])}
                >
                  Eliminar items
                </Button>
              )}

              <Button
                auto
                size="sm"
                onClick={() => screenNavigation.push(SCREENS.formTags)}
              >
                Crear Tag
              </Button>
            </Flex>
          </Flex>

          <Flex justify="flex-end">
            <Input
              clearable
              bordered
              size="sm"
              name="searchInput"
              placeholder="Búsqueda por palabra"
              disabled={loading.list}
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
          </Flex>
        </Flex>
      </HeaderFilterTable>
      <Table
        lined
        shadow={false}
        fixed
        aria-label="Lista de tags"
        selectionMode="multiple"
        css={{
          minHeight: 110,
          height: '100%',
          padding: 0,
          '& thead tr th': {
            zIndex: 201,
            position: 'sticky',
            top: 0
          },
          '& thead tr th:first-child': {
            width: 55
          }
        }}
        containerCss={{
          ...screenNavigation.metadata.containerListCss
        }}
        sortDescriptor={sortCell}
        onSortChange={(sortByCell) => setSortCell(sortByCell)}
        onSelectionChange={(eventSelection) => {
          const setList = eventSelection as 'all' | Set<ATag['id']>
          let tags: ATag[] = []

          if (setList instanceof Set) {
            setList.forEach((tagId) => {
              tags.push({ ...indexList[tagId] })
            })
          }

          if (setList === 'all') {
            tags = [...list]
          }

          setItemsSelected(tags)
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              allowsSorting
              key={column.uid}
              width={column.uid === 'createdAt' ? '100' : undefined}
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
    </>
  )
}
export default List
