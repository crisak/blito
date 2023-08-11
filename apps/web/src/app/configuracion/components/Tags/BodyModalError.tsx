'use client'

import { Text } from '@/app/shared/components'
import { AContent, AFile, ATag } from '@/models'
import { Spacer, Table, Tooltip, useTheme } from '@nextui-org/react'
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
  const { theme } = useTheme()

  return (
    <>
      {contents.filter(({ contents }) => contents.length === 0).length > 0 && (
        <>
          <Text>Tags sin galerías</Text>
          <Table
            lined
            compact
            shadow={false}
            aria-label={`Lista de tags a eliminar`}
            containerCss={{
              maxHeight: 300,
              overflow: 'auto'
            }}
            css={{
              height: '100%',
              minWidth: '100%',
              padding: 0
            }}
          >
            <Table.Header>
              <Table.Column>Tag</Table.Column>
            </Table.Header>
            <Table.Body>
              {contents
                .filter(({ contents }) => contents.length === 0)
                .map(({ tag }) => (
                  <Table.Row key={tag.id}>
                    <Table.Cell>{tag.name}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
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
                  lined
                  compact
                  shadow={false}
                  aria-label={`Lista de galerías con el tag ${tag.name}`}
                  containerCss={{
                    maxHeight: 300,
                    overflow: 'auto'
                  }}
                  css={{
                    height: 'auto',
                    minWidth: '100%',
                    padding: 0
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
                            <Tooltip
                              placement="top"
                              css={{
                                zIndex: 10000
                              }}
                              triggerCss={{
                                zIndex: 10000
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
              </Fragment>
            ))}
        </>
      )}

      <Text>Esta seguro de eliminar estos tags?</Text>
    </>
  )
}

export default BodyModalError
