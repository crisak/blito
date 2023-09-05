type ScreenPageBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ScreenPageBody = ({ children }: ScreenPageBodyProps) => {
  return <div className="screen-body">{children}</div>
}

export default ScreenPageBody
