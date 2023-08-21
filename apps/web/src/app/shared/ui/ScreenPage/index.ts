import ScreenPage from './ScreenPage'
import ScreenPageHeader from './ScreenPageHeader'
import ScreenPageBody from './ScreenPageBody'
import ScreenPageContainer from './ScreenPageContainer'
import ScreenPageProvider from './ScreenPageProvider'

ScreenPage.Header = ScreenPageHeader
ScreenPage.Body = ScreenPageBody
ScreenPage.Container = ScreenPageContainer
ScreenPage.Provider = ScreenPageProvider

export { useScreenPage } from './ScreenPageProvider'

export default ScreenPage
