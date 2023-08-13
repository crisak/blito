import clsx from "clsx"

export const FooterStyle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'footer'>) => {
  return <footer className={clsx('py-10', className)} {...props} />
}
