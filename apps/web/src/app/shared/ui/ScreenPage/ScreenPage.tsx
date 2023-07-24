import { PropsWithoutRef, RefAttributes } from 'react'
import ScreenPageHeader from './ScreenPageHeader'
import ScreenPageBody from './ScreenPageBody'
import ScreenPageContainer from './ScreenPageContainer'

type ScreenPageProps = { children: React.ReactNode }

const ScreenPage = (props: ScreenPageProps) => {
  return <>{props.children}</>
}

type ScreenPageComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Header: typeof ScreenPageHeader
  Body: typeof ScreenPageBody
  Container: typeof ScreenPageContainer
}

export default ScreenPage as ScreenPageComponent<
  HTMLDivElement,
  ScreenPageProps
>
