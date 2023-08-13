export type BoxProps = {
  css?: React.CSSProperties
} & React.ComponentPropsWithoutRef<'div'>

const Box = ({ css, ...props }: BoxProps) => {
  return <div style={css} {...props} />
}

export default Box
