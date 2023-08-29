type ScreenPageBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ScreenPageBody = ({ children }: ScreenPageBodyProps) => {
  return <div className="screen-body pb-unit-lg">{children}</div>
}

export default ScreenPageBody
