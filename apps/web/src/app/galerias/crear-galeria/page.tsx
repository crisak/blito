'use client'

import { Container, Text } from '@/app/shared/ui'
import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  RadioGroup
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { SiGooglemaps } from 'react-icons/si'
import { VscChevronLeft } from 'react-icons/vsc'
import ContentTypeRadio from './components/ContentTypeRadio'
import SelectCollaborator from './components/SelectCollaborator'

/**
 * 
 * type Content
  @model
  @auth(
    rules: [
      { allow: public, operations: [read] }
      { allow: groups, groups: ["Admin", "SuperAdmin"] }
    ]
  ) {
  id: ID!
  type: ContentType!
  time: Int! # In minutes
  size: Sizes!
  project: ContentProject
  files: [File]!
  date: AWSDateTime!
  location: Location
  colors: [String]
  views: Int
  Tags: [Tag] @manyToMany(relationName: "ContentTag")
  Category: Category @hasOne # contentCategoryId
  Collaborators: [Collaborator] @manyToMany(relationName: "ContentCollaborator")
}

enum ContentType {
  ALBUM
  PROJECT
  GALLERY
}

type ContentProject {
  name: String!
  description: String!
}

enum Sizes {
  XS
  S
  M
  L
  XL
}

 */

const CreateGalleryPage = () => {
  const router = useRouter()
  return (
    <>
      <header className="py-unit-lg">
        <Container className="item-center flex gap-unit-sm">
          <Button
            variant="light"
            isIconOnly
            onClick={() => {
              router.back()
            }}
          >
            <VscChevronLeft size={26} />
          </Button>
          <Text as="h2">Crear categoría</Text>
        </Container>
      </header>
      <form className="pb-unit-lg">
        <Container className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border border-primary">
            <Button>Agregar foto</Button>
          </div>

          <Card className="border border-primary">
            <CardBody className="flex w-full flex-col gap-unit-lg">
              <input type="hidden" name="id" />

              <ContentTypeRadio />

              <div className="flex gap-unit-lg">
                <Input variant="underlined" label="Nombre" />

                <Input variant="underlined" label="Descripción" />
              </div>

              <div className="flex gap-unit-lg">
                <Input
                  variant="underlined"
                  label="Duración"
                  description="Tiempo en minutos"
                  type="number"
                />

                <Input
                  variant="underlined"
                  placeholder="Fecha"
                  label="Fecha"
                  type="date"
                />
              </div>
              <RadioGroup label="Tamaño" orientation="horizontal">
                <Radio value="XS">Extra pequeño</Radio>
                <Radio value="S">Pequeño</Radio>
                <Radio value="M">Mediano</Radio>
                <Radio value="L">Grande</Radio>
                <Radio value="XL">Macro</Radio>
              </RadioGroup>

              <div className="flex flex-col items-center gap-unit-lg sm:flex-row">
                <Input
                  variant="underlined"
                  label="Ubicación"
                  description="Escribe dirección o una referencia"
                  type="search"
                />
                <Button
                  startContent={<SiGooglemaps size={18} />}
                  fullWidth
                  className="max-w-[230px]"
                >
                  Establecer en el mapa
                </Button>
              </div>

              <div className="flex flex-col items-center gap-unit-lg sm:flex-row">
                <SelectCollaborator />
                <div className="w-full">
                  <Input variant="underlined" label="Tags" />
                </div>
              </div>

              <div className="text-right">
                <Button color="primary">Guardar</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </form>
    </>
  )
}

export default CreateGalleryPage
