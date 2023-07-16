'use client'

import { Text } from '@/app/shared/components'
import { AContent, AFile, ATag } from '@/models'
import { Table, useTheme } from '@nextui-org/react'
import { ContentType, TypeFile } from 'blito-models'
import Image from 'next/image'
import Link from 'next/link'
import { GoLinkExternal } from 'react-icons/go'

const typeGallery = {
  [ContentType.PROJECT]: 'Proyecto',
  [ContentType.GALLERY]: 'Galería',
  [ContentType.ALBUM]: 'Album'
}

type BodyModalErrorProps = {
  contents: AContent[]
  tag: ATag
}

const BodyModalError = ({ contents = [], tag }: BodyModalErrorProps) => {
  const { theme } = useTheme()

  return (
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
                  ctn.files.find((fil) => Boolean(fil?.isBanner && fil.data)) ||
                  null

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
  )
}

export default BodyModalError
