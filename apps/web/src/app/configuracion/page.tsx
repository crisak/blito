import { Text, Container, Grid } from '@/app/shared/ui'
import { Card, CardBody } from '@nextui-org/card'
import { Spacer } from '@nextui-org/spacer'
import { TagScreen, HEIGHT_FILTER_LIST } from './components/Tags'

const MAX_HEIGHT_CARD = 580

const SettingsPage = () => {
  return (
    <>
      <Container>
        <Spacer y={1.5} />
        <Text as="h2" className="font-bold p-4">
          General
        </Text>
        <Spacer y={1.5} />
      </Container>
      <Container>
        <Grid.Container gap={2}>
          <Grid xs={12} md={5}>
            <Card className={`h-[${MAX_HEIGHT_CARD}px] overflow-hidden`}>
              <CardBody className="p-5">
                <TagScreen
                  containerListCss={`h-[calc(100% - ${HEIGHT_FILTER_LIST})] overflow-auto`}
                />
              </CardBody>
            </Card>
          </Grid>
          <Grid xs={12} md={7}>
            <Card>
              <CardBody className="p-6">
                <Text as="h3">Colaboradores</Text>
              </CardBody>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default SettingsPage
