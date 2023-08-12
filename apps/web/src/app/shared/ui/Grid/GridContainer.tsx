import classNames from 'classnames'

type GridContainerProps = {
  children: React.ReactNode | React.ReactNode[]
  gap?: number
  alignItems?: React.CSSProperties['alignItems']
} & React.ComponentPropsWithoutRef<'div'>

const GridContainer = ({ gap, alignItems, ...props }: GridContainerProps) => {
  return (
    <div
      className={classNames({
        [`grid grid-cols-${gap}`]: Boolean(gap),
        [`items-${alignItems}`]: Boolean(alignItems)
      })}
      {...props}
    />
  )
}

export default GridContainer
