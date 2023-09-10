import { Text } from '@/app/shared/ui'
import { Button } from '@nextui-org/button'
import { BsChevronLeft } from 'react-icons/bs'
import { useScreenPage } from './ScreenPageProvider'

type ScreenPageHeaderProps = {
  disableBackButton?: boolean
  children?: React.ReactNode | React.ReactNode[]
  title?: string | React.ReactNode | React.ReactNode[]
  actionsContent?: string | React.ReactNode | React.ReactNode[]
}

const ScreenPageHeader = ({
  disableBackButton,
  children,
  actionsContent,
  title
}: ScreenPageHeaderProps) => {
  const screenNavigation = useScreenPage()

  return (
    <div
      className="screen-header sticky top-0 z-20 flex flex-col gap-unit-lg bg-content1 pb-unit-lg shadow-lg"
      key="screen-page-header"
    >
      <div className="screen-header-title flex flex-wrap items-center justify-between gap-unit-sm">
        {title && (
          <div className="flex items-center">
            {disableBackButton !== true &&
              screenNavigation.history.length > 1 && (
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
        )}
        {actionsContent && <>{actionsContent}</>}
      </div>

      {children && <>{children}</>}
    </div>
  )
}

export default ScreenPageHeader
