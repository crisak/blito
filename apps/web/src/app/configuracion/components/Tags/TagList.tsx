'use client'

import { useAlert } from '@/app/shared/hooks'
import {
  Button,
  Input,
  SortDescriptor,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  colors
} from '@nextui-org/react'
import { MetadataScreens, SCREENS } from './Tag.constants'
import { useState, useMemo } from 'react'
import useFetchTags from './useFetchTags'
import { AContent, ATag } from '@/models'
import { BsSearch } from 'react-icons/bs'
import { BiTrashAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { Box, Text } from '@/app/shared/ui'
import BodyModalError, { type TagsWithContents } from './BodyModalError'
import { IoIosAdd } from 'react-icons/io'
import { ScreenPage, useScreenPage } from '@/app/shared/ui'

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
  // const { theme } = useTheme()
  // const collator = useCollator({ numeric: true })
  const alert = useAlert()
  const [searchInput, setSearchInput] = useState('')
  const screenNavigation = useScreenPage<MetadataScreens>()
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
    <ScreenPage>
      <ScreenPage.Header
        content={
          <>
            {itemsSelected.length > 0 && (
              <Button
                variant="light"
                size="sm"
                color="danger"
                startContent={<BiTrashAlt fill="currentColor" />}
                isLoading={loading.contents}
                className="mr-10"
                disabled={loading.contents}
                onClick={handleRemove}
              >
                Eliminar {itemsSelected.length} item(s)
              </Button>
            )}

            <Button
              size="sm"
              onClick={() => screenNavigation.push(SCREENS.formTags)}
              startContent={<IoIosAdd fill="currentColor" />}
            >
              Crear Tag
            </Button>
          </>
        }
      >
        Tags{' '}
        <Text as="span" className="text-gray-700 font-light m-0">
          ({list.length}
          {itemsSelected.length > 0 ? `/${itemsSelected.length}` : ''})
        </Text>
      </ScreenPage.Header>
      <ScreenPage.Body>
        <Input
          isClearable
          variant="bordered"
          fullWidth
          size="sm"
          name="searchInput"
          placeholder="Búsqueda por palabra"
          disabled={loading.list}
          onChange={(e) => setSearchInput(e.target.value || '')}
          value={searchInput}
          startContent={
            <BsSearch width="16" height="16" fill={colors.zinc['700']} />
          }
        />

        <Spacer y={2} />

        <Table
          shadow="none"
          // layout="fixed"
          aria-label="Lista de tags"
          selectionMode="multiple"
          className="min-h-[110px] p-0"
          classNames={{
            th: 'z-20 sticky top-0 z-50 first:w-[55px]',
            wrapper: screenNavigation.metadata.containerListCss
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
            {(column) => (
              <TableColumn
                allowsSorting
                key={column.uid}
                width={column.uid === 'createdAt' ? '100' : undefined}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={listFilter}
            loadingState={loading.list ? 'loading' : undefined}
          >
            {(item: ATag) => (
              <TableRow>
                {(columnKey: unknown) => (
                  <TableCell>
                    {renderCell(item, columnKey as keyof ATag | 'actions')}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScreenPage.Body>
    </ScreenPage>
  )
}
export default TagList
