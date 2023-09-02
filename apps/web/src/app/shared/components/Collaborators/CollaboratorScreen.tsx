'use client'

import { ScreenPage } from '@/app/shared/ui'
import { MetadataScreens, SCREENS } from './Collaborator.constants'
import CollaboratorForm from './CollaboratorForm'
import CollaboratorList from './CollaboratorList'

type ScreenTagsProps = MetadataScreens & {
  classNames?: { containerPages?: string; containerPage?: string }
}

const screens = {
  [SCREENS.listCollaborators]: () => <CollaboratorList />,
  [SCREENS.formCollaborators]: () => <CollaboratorForm />
} as const

const CollaboratorScreen = ({ classNames }: ScreenTagsProps) => {
  return (
    <ScreenPage.Provider
      pages={screens}
      currentPage={SCREENS.listCollaborators}
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

export default CollaboratorScreen
