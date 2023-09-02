import { Tags } from '@/app/shared/components'
import { Container, Text } from '@/app/shared/ui'
import { Card, CardBody } from '@nextui-org/card'

const SettingsPage = () => {
  return (
    <>
      <Container>
        <Text as="h2" className="mb-unit-lg font-bold">
          General
        </Text>
      </Container>
      <Container>
        <div className="grid auto-cols-max grid-cols-1 gap-10 lg:grid-cols-12">
          <Card className="h-unit-8xl overflow-hidden lg:col-span-5">
            <CardBody className="p-5">
              <Tags
                classNames={{
                  containerPages: 'h-unit-8xl'
                }}
              />
            </CardBody>
          </Card>

          <Card className="h-unit-8xl overflow-hidden lg:col-span-7">
            <CardBody className="p-6">
              <Text as="h3">Colaboradores</Text>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default SettingsPage
