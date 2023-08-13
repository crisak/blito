import classNames from 'classnames'

type ColProps = {
  span?: number
} & React.ComponentPropsWithoutRef<'div'>

const Col = ({ span, className, ...props }: ColProps) => {
  return (
    <div
      className={classNames('w-full px-4', className, {
        span: span ? `w-${span}/12` : ''
      })}
      {...props}
    />
  )
}

export default Col
