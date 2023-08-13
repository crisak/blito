import ScreenPage from './ScreenPage'
import ScreenPageHeader from './ScreenPageHeader'
import ScreenPageBody from './ScreenPageBody'
import ScreenPageContainer from './ScreenPageContainer'

ScreenPage.Header = ScreenPageHeader
ScreenPage.Body = ScreenPageBody
ScreenPage.Container = ScreenPageContainer

export {
  useScreenPage,
  default as ScreenPageProvider
} from './ScreenPageProvider'

export default ScreenPage
