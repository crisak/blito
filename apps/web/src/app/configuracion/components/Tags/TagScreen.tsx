import TagList from './TagList'
import TagForm from './TagForm'
import { ScreenPageProvider, ScreenPage } from '@/app/shared/ui'
import { SCREENS, MetadataScreens } from './Tag.constants'
import { semanticColors } from '@nextui-org/react'

type ScreenTagsProps = MetadataScreens & { containerCss?: React.CSSProperties }

const TagScreen = ({ containerListCss, containerCss }: ScreenTagsProps) => {
  const screens = {
    [SCREENS.listTags]: <TagList />,
    [SCREENS.formTags]: <TagForm />
  }

  return (
    <ScreenPageProvider
      background={semanticColors.dark.content1['900']}
      pages={screens}
      currentPage={SCREENS.listTags}
      containerCss={containerCss}
      metadata={{
        containerListCss
      }}
    >
      {({ page, component, props, index }) => (
        <ScreenPage.Container
          page={page}
          index={index}
          propsPage={props as object}
        >
          {component}
        </ScreenPage.Container>
      )}
    </ScreenPageProvider>
  )
}

export default TagScreen
