'use client'

import List from './List'
import Form from './Form'
import { PageNavigation, ProviderScreenNavigation } from '@/app/shared/hooks'
import { LIST_TAGS, FORM_TAGS, MetadataScreens } from './constants'
import { useTheme } from '@nextui-org/react'

type ScreenTagsProps = MetadataScreens & { height: number }

const ScreenTags = ({ containerListCss, height }: ScreenTagsProps) => {
  const { theme } = useTheme()
  const screens = {
    [LIST_TAGS]: <List />,
    [FORM_TAGS]: <Form />
  }

  return (
    <ProviderScreenNavigation
      background={theme?.colors.backgroundContrast.value}
      pages={screens}
      currentPage={LIST_TAGS}
      height={height}
      metadata={{
        containerListCss
      }}
    >
      {({ page, component }) => (
        <PageNavigation page={page}>{component}</PageNavigation>
      )}
    </ProviderScreenNavigation>
  )
}

export default ScreenTags
