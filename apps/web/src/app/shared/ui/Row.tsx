import clsx from "clsx"

type RowProps = {
  justify?: 'flex-end'
  css?: React.CSSProperties
  align?: React.CSSProperties['alignItems']
} & React.ComponentPropsWithoutRef<'div'>

const Row = ({ className, justify, css, align, ...props }: RowProps) => {
  return (
    <div
      style={css}
      className={clsx('flex flex-wrap -mx-4', className, {
        [`justify-${justify}`]: Boolean(justify),
        [`items-${align}`]: Boolean(align)
      })}
      {...props}
    />
  )
}

export default Row
