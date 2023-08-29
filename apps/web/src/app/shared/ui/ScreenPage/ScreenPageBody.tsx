type ScreenPageBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ScreenPageBody = ({ children }: ScreenPageBodyProps) => {
  console.debug('ScreenPage.ScreenPageBody', children)
  return <div className="screen-body pb-unit-lg">{children}</div>
}

export default ScreenPageBody
