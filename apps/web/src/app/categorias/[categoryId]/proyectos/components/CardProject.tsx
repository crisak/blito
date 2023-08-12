import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Image
} from '@nextui-org/react'
import { AContent } from '@/models'
import { formatDate } from '@/utils'
import Link from 'next/link'
import { Text, Col, Row } from '@/app/shared/ui'

type CardProjectProps = AContent & { categoryId: string }

const CardProject = ({
  id,
  project,
  files,
  date,
  type,
  categoryId
}: CardProjectProps) => {
  const file = files?.find((file) => {
    if (!file) return
    return Boolean(file.isBanner)
  })

  return (
    <Card className="w-full h-400px">
      <CardHeader className="absolute z-10 top-5">
        <div className="flex">
          <Text className="text-xs font-bold uppercase text-gray-500">
            {project?.description || ''}
          </Text>
          <Text as="h3" className="text-white">
            {project?.name || ''}
          </Text>
        </div>
      </CardHeader>
      <CardBody>
        <Image
          src={file?.data || files?.[0]?.data || ''}
          className="object-cover w-full h-full"
          alt={file?.caption || files?.[0]?.caption || ''}
        />
      </CardBody>
      <CardFooter className="relative bottom-0 z-10 bg-blur backdrop-blur-md">
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  className="bg-black rounded-full"
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text className="text-xs text-[#d1d1d1]">{type}</Text>
                <Text className="text-xs text-[#d1d1d1]">
                  {formatDate(date)}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button variant="flat">
                <Link href={`/categorias/${categoryId}/proyectos/${id}`}>
                  <Text className="text-inherit text-base font-bold uppercase">
                    Ver proyecto
                  </Text>
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}
export default CardProject
