import clsx from 'clsx'

type ScreenPageBodyProps = React.ComponentPropsWithRef<'div'>

const ScreenPageBody = ({ className, ...props }: ScreenPageBodyProps) => {
  return (
    <div
      key="screen-page-body"
      className={clsx('screen-body', className)}
      {...props}
    />
  )
}

export default ScreenPageBody
