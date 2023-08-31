import clsx from 'clsx'

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return <div className={clsx('container mx-auto', className)} {...props} />
}

export default Container
