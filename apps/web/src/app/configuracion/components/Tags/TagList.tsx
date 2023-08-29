'use client'

import { useAlert } from '@/app/shared/hooks'
import { Box, ScreenPage, Text } from '@/app/shared/ui'
import { AContent, ATag } from '@/models'
import {
  Button,
  colors,
  Input,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { IoIosAdd } from 'react-icons/io'
import { toast } from 'react-toastify'
import BodyModalError, { type TagsWithContents } from './BodyModalError'
import { MetadataScreens, SCREENS } from './Tag.constants'
import useFetchTags from './useFetchTags'

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
  (getContents: (tag: ATag) => Promise<AContent[]>) =>
  async (tag: ATag): Promise<TagsWithContents> => {
    try {
      const contents = await getContents(tag)
      return {
        tag,
        hasContents: false,
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
  const [itemsSelected, setItemsSelected] = useState<ATag[]>([])
  const [sortCell, setSortCell] = useState<SortDescriptor>({
    column: '',
    direction: undefined
  })
  const { list, loading, getContentsByTag, remove } = useFetchTags()

  const processRemove = async (tags: TagsWithContents[]): Promise<boolean> => {
    const STATUS_MODEL = {
      hideModal: true,
      keepOpen: false
    }
    const responsePromise = await Promise.allSettled(
      tags.map(async ({ tag }) => {
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
        if (res.status === 'rejected') {
          return res.reason
        }
        return null
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

    showToastSuccess('Los tag(s) fueron eliminados correctamente')

    return STATUS_MODEL.hideModal
  }

  const handleRemove = async () => {
    const getContents = processContents(getContentsByTag)
    const contents = await Promise.all(itemsSelected.map(getContents))

    alert.confirm({
      title: 'Eliminar tags',
      messageButtonAccept: 'Eliminar',
      body: <BodyModalError contents={contents || []} />,
      asyncFn: () => processRemove(contents)
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

  return (
    <>
      <ScreenPage.Header
        disableBackButton
        title={
          <>
            Tags
            <Text as="span" className="ml-2 font-light text-foreground-500">
              ({list.length}
              {itemsSelected.length > 0 ? `/${itemsSelected.length}` : ''})
            </Text>
          </>
        }
        actionsContent={
          <div className="flex gap-3">
            {itemsSelected.length > 0 && (
              <Button
                variant="light"
                size="sm"
                color="danger"
                startContent={<BiTrashAlt fill="currentColor" />}
                isLoading={loading.contents}
                disabled={loading.contents}
                onClick={handleRemove}
              >
                Eliminar {itemsSelected.length} item(s)
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
          variant="bordered"
          fullWidth
          name="searchInput"
          placeholder="Búsqueda por palabra"
          disabled={loading.list}
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
            table: 'table p-0 relative'
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
            loadingState={loading.list ? 'loading' : undefined}
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
