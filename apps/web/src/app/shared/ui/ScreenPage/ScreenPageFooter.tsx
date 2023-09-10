import clsx from 'clsx'

type ScreenPageFooterProps = {
  isSticky?: boolean
} & React.ComponentPropsWithoutRef<'footer'>

const ScreenPageFooter = ({
  isSticky,
  className,
  ...props
}: ScreenPageFooterProps) => {
  return (
    <footer
      key="screen-page-footer"
      style={{
        // color: 'red',
        // backgroundColor: isSticky ? 'blue' : undefined,
        boxShadow: isSticky
          ? `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px -10px 15px -3px, rgba(0, 0, 0, 0.1) 0px -4px 6px -4px`
          : undefined
      }}
      className={clsx(
        className,
        'screen-footer z-20 flex flex-col gap-unit-lg bg-content1 pt-unit-lg',
        {
          'sticky bottom-0': isSticky
        }
      )}
      {...props}
    />
  )
}

export default ScreenPageFooter
