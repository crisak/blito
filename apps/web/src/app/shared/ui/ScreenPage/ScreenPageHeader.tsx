import { Box, Text, Grid } from '@/app/shared/ui'
import { useScreenPage } from './ScreenPageProvider'
import { Button } from '@nextui-org/button'
import { BsChevronLeft } from 'react-icons/bs'

type ScreenPageHeaderProps = {
  disableBackButton?: boolean
  children?: React.ReactNode | React.ReactNode[]
  // content?: React.ReactNode | React.ReactNode[]
  title?: string | React.ReactNode | React.ReactNode[]
}

const ScreenPageHeader = ({
  disableBackButton,
  children,
  title
}: ScreenPageHeaderProps) => {
  const screenNavigation = useScreenPage()

  return (
    <div className="screen-header flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        {disableBackButton !== true && screenNavigation.history.length > 1 && (
          <Button
            isIconOnly
            variant="light"
            color="default"
            className="flex h-[30px] w-[20px] min-w-[22px] justify-start"
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
          {title}
        </Text>
      </div>
      {children && <>{children}</>}
    </div>
  )
}

export default ScreenPageHeader
