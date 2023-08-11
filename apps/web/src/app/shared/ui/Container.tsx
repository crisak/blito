import classNames from 'classnames'

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={classNames('container mx-auto', className)} {...props} />
  )
}

export default Container
