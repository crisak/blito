import { Box, Text, Grid } from '@/app/shared/ui'
import { useScreenPage } from './ScreenPageProvider'
import { Button } from '@nextui-org/button'
import { BsChevronLeft } from 'react-icons/bs'

type ScreenPageHeaderProps = {
  enableBackButton?: boolean
  children: React.ReactNode | React.ReactNode[]
  content?: React.ReactNode | React.ReactNode[]
}

const ScreenPageHeader = ({
  enableBackButton,
  children,
  content
}: ScreenPageHeaderProps) => {
  const screenNavigation = useScreenPage()

  return (
    <Grid.Container gap={2} alignItems="center">
      <Grid
        xs={12}
        sm
        alignItems="center"
        justify="flex-start"
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <Box className="flex justify-center">
          {enableBackButton && screenNavigation.history.length > 1 && (
            <Button
              variant="light"
              color="default"
              className="min-w-min rounded-full w-[30px] h-[30px] flex items-center justify-start"
              startContent={
                <BsChevronLeft
                  fill="currentColor"
                  size={25}
                  style={{ marginLeft: '-7px' }}
                />
              }
              onClick={() => {
                screenNavigation.pop()
              }}
            />
          )}

          <Text
            as="h3"
            css={{
              margin: 0
            }}
          >
            {children}
          </Text>
        </Box>
      </Grid>
      {content && (
        <Grid xs={12} sm={8} justify="flex-end" alignItems="center">
          {content}
        </Grid>
      )}
    </Grid.Container>
  )
}

export default ScreenPageHeader
