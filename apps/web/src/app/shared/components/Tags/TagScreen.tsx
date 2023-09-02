'use client'

import { ScreenPage } from '@/app/shared/ui'
import { MetadataScreens, SCREENS } from './Tag.constants'
import TagForm from './TagForm'
import TagList from './TagList'

type ScreenTagsProps = MetadataScreens & {
  classNames?: { containerPages?: string; containerPage?: string }
}

const screens = {
  [SCREENS.listTags]: () => <TagList />,
  [SCREENS.formTags]: () => <TagForm />
} as const

const TagScreen = ({ classNames }: ScreenTagsProps) => {
  return (
    <ScreenPage.Provider
      pages={screens}
      currentPage={SCREENS.listTags}
      classNames={{
        containerPage: classNames?.containerPage
      }}
      className={
        /** Defined height page container  */
        classNames?.containerPages
      }
    />
  )
}

export default TagScreen
