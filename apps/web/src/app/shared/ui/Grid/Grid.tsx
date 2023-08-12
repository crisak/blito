import type { PropsWithoutRef, RefAttributes } from 'react'
import GridContainer from './GridContainer'
import classNames from 'classnames'

type GridProps = {
  xs?: boolean | number | string
  sm?: boolean | number | string
  md?: boolean | number | string
  lg?: boolean | number | string
  css?: React.CSSProperties
  direction?: React.CSSProperties['flexDirection']
  justify?: React.CSSProperties['justifyContent']
  alignItems?: React.CSSProperties['alignItems']
} & React.ComponentPropsWithoutRef<'div'>

const Grid = ({
  style,
  className,
  xs,
  sm,
  md,
  lg,
  css,
  direction,
  justify,
  alignItems,
  ...props
}: GridProps) => {
  return (
    <div
      style={{
        ...style,
        ...css
      }}
      className={classNames(
        className,
        `justify-${justify || 'normal'}`,
        `flex-${direction || 'row'}`,
        `items-${alignItems || 'start'}`,
        {
          'xs:flex': Boolean(xs),
          'sm:flex': Boolean(sm),
          'md:flex': Boolean(md),
          'lg:flex': Boolean(lg)
        }
      )}
      {...props}
    />
  )
}

type GridComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Container: typeof GridContainer
}

export default Grid as GridComponent<HTMLDivElement, GridProps>
