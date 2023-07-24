'use client'

import { Flex, Text } from '@/app/shared/components'
import { useScreenPage } from './ScreenPageProvider'
import { Button, Grid } from '@nextui-org/react'
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
        <Flex align="center">
          {enableBackButton && screenNavigation.history.length > 1 && (
            <Button
              light
              color="default"
              css={{
                minWidth: 'auto',
                borderRadius: '50%',
                width: 30,
                height: 30,
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
            {children}
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

export default ScreenPageHeader
