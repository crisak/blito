type ScreenPageBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ScreenPageBody = ({ children }: ScreenPageBodyProps) => {
  return <div className="screen-body py-unit-lg">{children}</div>
}

export default ScreenPageBody
