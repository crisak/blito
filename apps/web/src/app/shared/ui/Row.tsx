import classNames from 'classnames'

type RowProps = {
  justify?: 'flex-end'
} & React.ComponentPropsWithoutRef<'div'>

const Row = ({ className, justify, ...props }: RowProps) => {
  return (
    <div
      className={classNames('flex flex-wrap -mx-4', className, {
        justify: justify ? `justify-${justify}` : ''
      })}
      {...props}
    />
  )
}

export default Row
