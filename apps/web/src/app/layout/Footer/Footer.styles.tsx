import classNames from 'classnames'

export const FooterStyle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'footer'>) => {
  return <footer className={classNames('py-10', className)} {...props} />
}
