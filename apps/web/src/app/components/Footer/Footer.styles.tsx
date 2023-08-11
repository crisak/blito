import classNames from 'classnames'

export const FooterStyle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'footer'>) => {
  return <div className={classNames('py-10', className)} {...props} />
}
