import { Text, Container } from '@/app/shared/ui'
import { Card, CardBody } from '@nextui-org/card'
import { Spacer } from '@nextui-org/spacer'
import { TagScreen } from './components/Tags'

const MAX_HEIGHT_CARD = 580

const SettingsPage = () => {
  return (
    <>
      <Container>
        <Spacer y={1.5} />
        <Text as="h2" className="p-4 font-bold">
          General
        </Text>
        <Spacer y={1.5} />
      </Container>
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <Card className="h-unit-8xl overflow-hidden">
            <CardBody className="p-5">
              <TagScreen
                classNames={{
                  containerPages: 'h-unit-8xl'
                }}
              />
            </CardBody>
          </Card>

          <Card className={`h-[${MAX_HEIGHT_CARD}px] overflow-hidden`}>
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
