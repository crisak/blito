import clsx from "clsx"

type GridContainerProps = {
  children: React.ReactNode | React.ReactNode[]
  gap?: number
  alignItems?: React.CSSProperties['alignItems']
} & React.ComponentPropsWithoutRef<'div'>

const GridContainer = ({ gap, alignItems, ...props }: GridContainerProps) => {
  return (
    <div
      className={clsx({
        [`grid grid-cols-${gap}`]: Boolean(gap),
        [`items-${alignItems}`]: Boolean(alignItems)
      })}
      {...props}
    />
  )
}

export default GridContainer
