import clsx from "clsx"

type TextProps<T = React.ElementType> = {
  as?: T
  css?: React.CSSProperties
} & React.ComponentPropsWithoutRef<'p'>

const Text = ({ as, css, className, ...props }: TextProps) => {
  const propsConcat: React.CSSProperties = css ?? {}

  const Element = as || 'p'

  if (as === 'h1') {
    propsConcat.fontFamily = 'spray'
    propsConcat.letterSpacing = '0.4rem'
  }

  if (as === 'h2') {
    propsConcat.fontFamily = 'network'
    propsConcat.letterSpacing = '.2rem'
  }

  return (
    <Element
      style={propsConcat}
      className={clsx(className, {
        'text-3xl': as === 'h2',
        'text-6xl': as === 'h1',
        'font-bold': Boolean(/h[3,4,5,6]/.exec(String(as)))
      })}
      {...props}
    />
  )
}

export default Text
