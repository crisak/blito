type TextProps<T = React.ElementType> = {
  as?: T
  css?: React.CSSProperties
} & React.ComponentPropsWithoutRef<'p'>

const Text = ({ as, css, ...props }: TextProps) => {
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

  return <Element style={propsConcat} {...props} />
}

export default Text
