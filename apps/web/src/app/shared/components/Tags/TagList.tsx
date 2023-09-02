'use client'

import { useAlert } from '@/app/shared/hooks'
import { Box, ScreenPage, Text } from '@/app/shared/ui'
import { ARContentByTag, ATag } from '@/models'
import { useTagStore } from '@/store'
import {
  Button,
  colors,
  Input,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { IoIosAdd } from 'react-icons/io'
import { toast } from 'react-toastify'
import BodyModalError, { type TagsWithContents } from './BodyModalError'
import { MetadataScreens, SCREENS } from './Tag.constants'

const columns: Array<{ name: string; uid: keyof ATag | 'actions' }> = [
  { name: 'Nombre', uid: 'name' },
  { name: 'Fecha', uid: 'createdAt' }
]

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
}

const processContents =
  (getContents: (tag: ATag['id']) => Promise<ARContentByTag[]>) =>
  async (tag: ATag): Promise<TagsWithContents> => {
    try {
      const contentsByTag = await getContents(tag.id)
      const contents = contentsByTag.map(({ content }) => content)

      return {
        tag,
        hasContents: contents.length > 0,
        contents: contents || [],
        error: null
      }
    } catch (error) {
      return {
        tag,
        hasContents: false,
        contents: [],
        error: error
      }
    }
  }

const TagList = () => {
  const alert = useAlert()
  const [searchInput, setSearchInput] = useState('')
  const screenNavigation = ScreenPage.useScreenPage<MetadataScreens>()
  const [selectedKeys, setSelectedKeys] = useState<Set<ATag['id']>>(new Set([]))
  const [sortCell, setSortCell] = useState<SortDescriptor>({
    column: '',
    direction: undefined
  })

  const [getContentsByTag, getAll, remove, list, loading] = useTagStore(
    (state) => [
      state.getContentsByTag,
      state.getAll,
      state.remove,
      state.list,
      state.loading
    ]
  )

  const processRemove = async (
    tagsContentsRemoved: TagsWithContents[]
  ): Promise<boolean> => {
    const STATUS_MODEL = {
      hideModal: true,
      keepOpen: false
    }
    const responsePromise = await Promise.all(
      tagsContentsRemoved.map(async ({ tag }) => {
        try {
          await remove(tag)
          return { tag, error: null }
        } catch (error) {
          return { tag, error }
        }
      })
    )

    const errors: { tag: ATag; error: unknown }[] = responsePromise
      .map((res) => {
        if (res.error) {
          return res
        }

        return null as any
      })
      .filter(Boolean)

    if (errors.length) {
      toast(
        <Box>
          <Text>Error al eliminar unos de los tags</Text>
          <ul>
            {errors.map(({ tag, error }) => (
              <li key={tag.id}>
                <Text as="b">{tag.name} </Text>
                <br />
                <details>
                  <summary>Ver error</summary>
                  <pre style={{ opacity: 0.7 }}>
                    {JSON.stringify(error, null, 2)}
                  </pre>
                </details>
              </li>
            ))}
          </ul>
        </Box>,
        { type: 'error', autoClose: false, closeOnClick: false }
      )
      return STATUS_MODEL.keepOpen
    }

    setSelectedKeys(new Set([]))

    showToastSuccess('Los tag(s) fueron eliminados correctamente')

    return STATUS_MODEL.hideModal
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
            as="span"
            color={'primary'}
            className="cursor-pointer underline"
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
        const values = Object.values(rest)
          .join('')
          .replace(/\s/g, '')
          .toUpperCase()
          .trim()
        return values.includes(
          searchInput.replace(/\s/g, '').toUpperCase().trim()
        )
      })
    }

    /** Sort by column */
    if (sortCell?.column) {
      list_.sort((a, b) => {
        const nameColumn = sortCell.column as keyof ATag
        let first = a[nameColumn] ?? ''
        let second = b[nameColumn] ?? ''

        let cmp =
          (parseInt(first as string) || first) <
          (parseInt(second as string) || second)
            ? -1
            : 1

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

  const handleRemove = async () => {
    const tagsContents = await Promise.all(
      Array.from(selectedKeys)
        .map((tagId) => indexList[tagId])
        .map(processContents(getContentsByTag))
    )

    alert.confirm({
      title: 'Eliminar tags',
      messageButtonAccept: 'Eliminar',
      body: <BodyModalError tagsContents={tagsContents || []} />,
      asyncFn: () => processRemove(tagsContents)
    })
  }

  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ScreenPage.Header
        disableBackButton
        title={
          <>
            Tags
            <Text as="span" className="ml-2 font-light text-foreground-500">
              ({list.length}
              {selectedKeys.size > 0 ? `/${selectedKeys.size}` : ''})
            </Text>
          </>
        }
        actionsContent={
          <div className="flex gap-3">
            {selectedKeys.size > 0 && (
              <Button
                variant="light"
                size="sm"
                color="danger"
                startContent={<BiTrashAlt fill="currentColor" />}
                isLoading={loading === 'previewDelete'}
                disabled={loading === 'previewDelete'}
                onClick={handleRemove}
              >
                Eliminar {selectedKeys.size} item(s)
              </Button>
            )}

            <Button
              size="sm"
              onClick={() => screenNavigation.push(SCREENS.formTags)}
              startContent={<IoIosAdd size={16} fill="currentColor" />}
            >
              Crear Tag
            </Button>
          </div>
        }
      >
        <Input
          isClearable
          onClear={() => setSearchInput('')}
          variant="bordered"
          fullWidth
          name="searchInput"
          placeholder="Búsqueda por palabra"
          disabled={loading === 'list'}
          onChange={(e) => setSearchInput(e.target.value || '')}
          value={searchInput}
          startContent={
            <BsSearch width="16" height="16" fill={colors.zinc['700']} />
          }
        />
      </ScreenPage.Header>

      <ScreenPage.Body>
        <Table
          isHeaderSticky
          layout="fixed"
          aria-label="Lista de tags"
          selectionMode="multiple"
          className="p-0"
          classNames={{
            wrapper: screenNavigation?.metadata?.containerListCss,
            base: 'base p-0',
            emptyWrapper: 'emptyWrapper p-0',
            table: clsx('table-tags p-0 relative', {
              'min-h-[250px]': loading === 'list'
            })
          }}
          sortDescriptor={sortCell}
          onSortChange={(sortByCell) => setSortCell(sortByCell)}
          selectedKeys={selectedKeys}
          onSelectionChange={(eventSelection) => {
            const setList = eventSelection as 'all' | Set<ATag['id']>

            if (setList instanceof Set) {
              setSelectedKeys(setList)
            }

            if (setList === 'all') {
              setSelectedKeys(new Set(Object.keys(indexList)))
            }
          }}
        >
          <TableHeader columns={columns}>
            {(column) => {
              return (
                <TableColumn
                  allowsSorting
                  key={column.uid}
                  width={column.uid === 'createdAt' ? '100' : undefined}
                >
                  {column.name}
                </TableColumn>
              )
            }}
          </TableHeader>
          <TableBody
            items={listFilter}
            isLoading={loading === 'list'}
            loadingContent={<Spinner size="md" label="Cargando registros..." />}
          >
            {(item: ATag) => (
              <TableRow>
                {(columnKey: unknown) => {
                  return (
                    <TableCell width={columnKey === '' ? 28 : 'auto'}>
                      {renderCell(item, columnKey as keyof ATag | 'actions')}
                    </TableCell>
                  )
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScreenPage.Body>
    </>
  )
}
export default TagList
