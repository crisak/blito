import { Flex, Text } from '@/app/shared/components'
import { useScreenNavigation } from '@/app/shared/hooks'
import { Button, Grid } from '@nextui-org/react'

import { BsChevronLeft } from 'react-icons/bs'

type NavHeaderProps = {
  title?: React.ReactNode | React.ReactNode[] | string
  content?: React.ReactNode | React.ReactNode[]
  enableBackButton?: boolean
}

const ScreenHeader = ({ title, content, enableBackButton }: NavHeaderProps) => {
  const screenNavigation = useScreenNavigation()

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
        <Flex align="center" gap="$2">
          {enableBackButton && screenNavigation.history.length > 1 && (
            <Button
              light
              color="default"
              css={{
                minWidth: 'auto',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
              icon={
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
            h3
            css={{
              margin: 0
            }}
          >
            {title}
          </Text>
        </Flex>
      </Grid>
      {content && (
        <Grid xs={12} sm={8} justify="flex-end" alignItems="center">
          {content}
        </Grid>
      )}
    </Grid.Container>
  )
}

export default ScreenHeader
