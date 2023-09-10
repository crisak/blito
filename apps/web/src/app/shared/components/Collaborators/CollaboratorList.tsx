'use client'

import { useAlert } from '@/app/shared/hooks'
import { Box, ScreenPage, Text } from '@/app/shared/ui'
import BlitoIconWhite from '@/assets/icons/blito-icon-white.png'
import { ACollaborator, ARContentByCollaborator } from '@/models'
import { useCollaboratorStore } from '@/store'
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
  TableRow,
  User
} from '@nextui-org/react'

import { SocialNetwork, TypeSocialNetwork } from 'blito-models'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import type { IconType } from 'react-icons'
import { BiTrashAlt } from 'react-icons/bi'
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsSearch,
  BsTiktok,
  BsTwitter,
  BsYoutube
} from 'react-icons/bs'
import { IoIosAdd } from 'react-icons/io'
import { VscRefresh } from 'react-icons/vsc'
import { toast } from 'react-toastify'
import BodyModalError, {
  type CollaboratorsWithContents
} from './BodyModalError'
import { MetadataScreens, SCREENS } from './Collaborator.constants'

const columns: Array<{ name: string; uid: keyof ACollaborator | 'actions' }> = [
  { name: 'Apodo', uid: 'username' },
  { name: 'Nombre', uid: 'fullName' },
  { name: 'Redes', uid: 'socials' }
]

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
}

const processContents =
  (
    getContents: (
      collaborator: ACollaborator['id']
    ) => Promise<ARContentByCollaborator[]>
  ) =>
  async (collaborator: ACollaborator): Promise<CollaboratorsWithContents> => {
    try {
      const contentsByCollaborator = await getContents(collaborator.id)
      const contents = contentsByCollaborator.map(({ content }) => content)

      return {
        collaborator: collaborator,
        hasContents: contents.length > 0,
        contents: contents || [],
        error: null
      }
    } catch (error) {
      return {
        collaborator: collaborator,
        hasContents: false,
        contents: [],
        error: error
      }
    }
  }

const CollaboratorList = () => {
  const alert = useAlert()
  const [searchInput, setSearchInput] = useState('')
  const screenNavigation = ScreenPage.useScreenPage<MetadataScreens>()
  const [selectedKeys, setSelectedKeys] = useState<Set<ACollaborator['id']>>(
    new Set([])
  )
  const [sortCell, setSortCell] = useState<SortDescriptor>({
    column: '',
    direction: undefined
  })

  const [getContentsByCollaborator, getAll, remove, list, loading] =
    useCollaboratorStore((state) => [
      state.getContentsByCollaborator,
      state.getAll,
      state.remove,
      state.list,
      state.loading
    ])

  const processRemove = async (
    collaboratorsContentsRemoved: CollaboratorsWithContents[]
  ): Promise<boolean> => {
    const STATUS_MODEL = {
      hideModal: true,
      keepOpen: false
    }
    const responsePromise = await Promise.all(
      collaboratorsContentsRemoved.map(async ({ collaborator }) => {
        try {
          await remove(collaborator)
          return { collaborator, error: null }
        } catch (error) {
          return { collaborator, error }
        }
      })
    )

    const errors: { collaborator: ACollaborator; error: unknown }[] =
      responsePromise
        .map((res) => {
          if (res.error) {
            return res
          }

          return null
        })
        .filter(Boolean)

    if (errors.length) {
      toast(
        <Box>
          <Text>Error al eliminar unos de los colaboradores</Text>
          <ul>
            {errors.map(({ collaborator, error }) => (
              <li key={collaborator.id}>
                <Text as="b">{collaborator.fullName} </Text>
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

    showToastSuccess('Los colaborador(s) fueron eliminados correctamente')

    return STATUS_MODEL.hideModal
  }

  const handleEdit = (collaborator: ACollaborator) => {
    screenNavigation.push<{ collaborator: ACollaborator }>(
      SCREENS.formCollaborators,
      { collaborator }
    )
  }

  const renderCell = (
    collaborator: ACollaborator,
    columnKey: keyof ACollaborator | 'actions'
  ) => {
    // @ts-ignore
    const cellValue: ACollaborator[columnKey] = collaborator[columnKey]

    switch (columnKey) {
      case 'username':
        const getWithHttpProtocol = (url: string | undefined) =>
          (url || '').includes('http') ? url : `https://${url}`

        const url = collaborator.photoUrl
          ? getWithHttpProtocol(collaborator.photoUrl)
          : null

        return (
          <User
            className="group/avatar cursor-pointer"
            onClick={() => handleEdit(collaborator)}
            avatarProps={{
              radius: 'lg',
              src: url || BlitoIconWhite.src,
              className:
                'avatar-cris border-2 border-transparent group-hover/avatar:border-primary group-hover/avatar:border-2 transition-all',
              classNames: {
                img: clsx({ 'brightness-[.1]': !url })
              }
            }}
            description={collaborator?.email || collaborator.fullName}
            name={cellValue}
            classNames={{
              name: 'font-bold text-primary group-hover/avatar:underline transition-all',
              description:
                'text-primary-300 group-hover/avatar:underline transition-all'
            }}
          >
            {collaborator?.email || 'Sin correo'}
          </User>
        )

      case 'fullName':
        /** Render full name with phone number */
        return (
          <div className="flex flex-col text-small">
            <Text className="font-bold">{cellValue || 'Sin nombre'}</Text>
            <Text className="text-default-400">
              {collaborator.phone || 'Sin teléfono'}
            </Text>
          </div>
        )

      case 'socials':
        if (!cellValue.length) {
          return 'Sin redes sociales'
        }

        /** Show icon of social media with react-icons */
        return (
          <div className="flex items-center gap-2">
            {cellValue.map((social: SocialNetwork) => {
              const hasHttpProtocol = social.url.includes('http')
              const url = hasHttpProtocol ? social.url : `https://${social.url}`

              const icons: Record<TypeSocialNetwork, IconType> = {
                [TypeSocialNetwork.FACEBOOK]: BsFacebook,
                [TypeSocialNetwork.INSTAGRAM]: BsInstagram,
                [TypeSocialNetwork.YOUTUBE]: BsYoutube,
                [TypeSocialNetwork.TIKTOK]: BsTiktok,
                [TypeSocialNetwork.PINTEREST]: BsPinterest,
                [TypeSocialNetwork.TWITTER]: BsTwitter
              }

              const IconSocial: IconType = icons[social.type]

              return (
                <a
                  href={url}
                  className="group/link-social rounded-full border border-default-300 p-unit-xs transition-all hover:border-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconSocial className="transition-all group-hover/link-social:text-primary" />
                </a>
              )
            })}
          </div>
        )

      default:
        return typeof cellValue === 'string'
          ? cellValue
          : JSON.stringify(cellValue)
    }
  }

  const listFilter = useMemo(() => {
    let list_ = [...list]

    /** Filter element with search input */
    if (searchInput.length > 2) {
      list_ = list_.filter((collaborator) => {
        /** Ignore properties */
        const { id, _version, _deleted, ...rest } = collaborator
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
        const nameColumn = sortCell.column as keyof ACollaborator
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
    const indexObject: Record<ACollaborator['id'], ACollaborator> = {}
    list.forEach((collaborator) => {
      indexObject[collaborator.id] = collaborator
    })
    return indexObject
  }, [list])

  const handleRemove = async () => {
    const collaboratorContents = await Promise.all(
      Array.from(selectedKeys)
        .map((collaboratorId) => indexList[collaboratorId])
        .map(processContents(getContentsByCollaborator))
    )

    alert.confirm({
      title: 'Eliminar colaboradores',
      messageButtonAccept: 'Eliminar',
      body: (
        <BodyModalError collaboratorsContents={collaboratorContents || []} />
      ),
      asyncFn: () => processRemove(collaboratorContents)
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
            Colaboradores
            <Text as="span" className="ml-2 font-light text-foreground-500">
              ({list.length}
              {selectedKeys.size > 0 ? `/${selectedKeys.size}` : ''})
            </Text>
          </>
        }
        actionsContent={
          <div className="flex gap-3">
            <Button
              isLoading={loading === 'list'}
              color="primary"
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => {
                getAll({ refresh: true })
              }}
            >
              {!loading && <VscRefresh size={20} />}
            </Button>
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
              color="primary"
              onClick={() => screenNavigation.push(SCREENS.formCollaborators)}
              startContent={<IoIosAdd size={16} fill="currentColor" />}
            >
              Crear
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
          placeholder="Búsqueda por nombre, apodo, email, etc."
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
          aria-label="Lista de colaboradores"
          selectionMode="multiple"
          className="p-0"
          classNames={{
            wrapper: screenNavigation?.metadata?.containerListCss,
            base: 'base p-0',
            emptyWrapper: 'emptyWrapper p-0',
            table: clsx('table-colaboradores p-0 relative', {
              'min-h-[250px]': loading === 'list'
            })
          }}
          sortDescriptor={sortCell}
          onSortChange={(sortByCell) => setSortCell(sortByCell)}
          selectedKeys={selectedKeys}
          onSelectionChange={(eventSelection) => {
            const setList = eventSelection as 'all' | Set<ACollaborator['id']>

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
                  maxWidth={column.uid === 'socials' ? '100' : undefined}
                >
                  {column.name}
                </TableColumn>
              )
            }}
          </TableHeader>
          <TableBody
            key="table-body"
            items={listFilter}
            isLoading={loading === 'list'}
            emptyContent={'No hay colaboradores'}
            loadingContent={<Spinner size="md" label="Cargando registros..." />}
          >
            {(item: ACollaborator) => {
              return (
                <TableRow key={item.id}>
                  {(columnKey: unknown) => {
                    return (
                      <TableCell>
                        {renderCell(
                          item,
                          columnKey as keyof ACollaborator | 'actions'
                        )}
                      </TableCell>
                    )
                  }}
                </TableRow>
              )
            }}
          </TableBody>
        </Table>
      </ScreenPage.Body>
    </>
  )
}
export default CollaboratorList
