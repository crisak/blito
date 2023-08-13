import { Text } from '@/app/shared/ui'
import { AContent, AFile, ATag } from '@/models'
import {
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  semanticColors
} from '@nextui-org/react'
import { ContentType, TypeFile } from 'blito-models'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { GoLinkExternal } from 'react-icons/go'

const typeGallery = {
  [ContentType.PROJECT]: 'Proyecto',
  [ContentType.GALLERY]: 'Galería',
  [ContentType.ALBUM]: 'Album'
}

export type TagsWithContents = {
  tag: ATag
  hasContents: boolean
  contents: AContent[]
  error: unknown
}

type BodyModalErrorProps = {
  contents: TagsWithContents[]
}

const BodyModalError = ({ contents = [] }: BodyModalErrorProps) => {
  return (
    <>
      {contents.filter(({ contents }) => contents.length === 0).length > 0 && (
        <>
          <Text>Tags sin galerías</Text>
          <Table
            isCompact
            shadow="none"
            aria-label={`Lista de tags a eliminar`}
            classNames={{
              wrapper: 'max-h-[300px] overflow-auto'
            }}
            className="h-full min-w-full p-0"
          >
            <TableHeader>
              <TableColumn>Tag</TableColumn>
            </TableHeader>
            <TableBody>
              {contents
                .filter(({ contents }) => contents.length === 0)
                .map(({ tag }) => (
                  <TableRow key={tag.id}>
                    <TableCell>{tag.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </>
      )}

      <Spacer />

      {contents.filter(({ contents }) => contents.length > 0).length > 0 && (
        <>
          <Text>Se encontraron galerías en los siguientes tags</Text>
          {contents
            .filter(({ contents }) => contents.length > 0)
            .map(({ tag, contents }) => (
              <Fragment key={tag.id}>
                <Text key={tag.id} as="b">
                  {tag.name}
                </Text>
                <Table
                  isCompact
                  shadow="none"
                  aria-label={`Lista de galerías con el tag ${tag.name}`}
                  className="h-full min-w-full p-0"
                  classNames={{
                    wrapper: 'max-h-[300px] overflow-auto'
                  }}
                >
                  <TableHeader>
                    <TableColumn>Galería</TableColumn>
                    <TableColumn>Tipo</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn hideHeader>Acciones</TableColumn>
                  </TableHeader>

                  <TableBody>
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
                        <TableRow key={ctn.id}>
                          <TableCell>
                            <Tooltip
                              placement="top"
                              classNames={{
                                base: 'z-10'
                              }}
                              content={
                                <Image
                                  src={image.data}
                                  alt={image.caption || ctn.project?.name || ''}
                                  width={200}
                                  height={200}
                                  style={{
                                    borderRadius: 5
                                  }}
                                />
                              }
                            >
                              <Image
                                src={image.data}
                                alt={image.caption || ctn.project?.name || ''}
                                width={30}
                                height={30}
                                style={{
                                  borderRadius: 5,
                                  cursor: 'pointer'
                                }}
                              />
                            </Tooltip>
                          </TableCell>
                          <TableCell>{typeGallery[ctn.type]}</TableCell>
                          <TableCell>
                            {ctn.project?.name || image.caption || ''}
                          </TableCell>
                          <TableCell>
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
                                fill={semanticColors.dark.primary['400']}
                              />
                            </Link>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Fragment>
            ))}
        </>
      )}

      <Text>Esta seguro de eliminar estos tags?</Text>
    </>
  )
}

export default BodyModalError
