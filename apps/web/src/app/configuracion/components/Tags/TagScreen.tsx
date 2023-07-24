'use client'

import TagList from './TagList'
import TagForm from './TagForm'
import { ScreenPageProvider, ScreenPage } from '@/app/shared/ui'
import { SCREENS, MetadataScreens } from './Tag.constants'
import { CSS, useTheme } from '@nextui-org/react'

type ScreenTagsProps = MetadataScreens & { containerCss?: CSS }

const TagScreen = ({ containerListCss, containerCss }: ScreenTagsProps) => {
  const { theme } = useTheme()
  const screens = {
    [SCREENS.listTags]: <TagList />,
    [SCREENS.formTags]: <TagForm />
  }

  return (
    <ScreenPageProvider
      background={theme?.colors.backgroundContrast.value}
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
