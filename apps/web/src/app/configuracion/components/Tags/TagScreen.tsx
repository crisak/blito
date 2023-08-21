'use client'

import TagList from './TagList'
import TagForm from './TagForm'
import { ScreenPage } from '@/app/shared/ui'
import { SCREENS, MetadataScreens } from './Tag.constants'

type ScreenTagsProps = MetadataScreens & {
  classNames?: { containerPages?: string; containerPage?: string }
}

const screens = {
  [SCREENS.listTags]: () => <TagList />,
  [SCREENS.formTags]: () => <TagForm />
} as const

const TagScreen = ({ containerListCss, classNames }: ScreenTagsProps) => {
  return (
    <ScreenPage.Provider
      pages={screens}
      currentPage={SCREENS.listTags}
      className={classNames?.containerPages}
      metadata={{
        containerListCss
      }}
    >
      {({ page, component, props, index }) => (
        <ScreenPage.Container
          key={page}
          page={page}
          index={index}
          propsPage={props as object}
          className={classNames?.containerPage}
        >
          {component}
        </ScreenPage.Container>
      )}
    </ScreenPage.Provider>
  )
}

export default TagScreen
