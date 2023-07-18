'use client'

import List from './List'
import Form from './Form'
import { PageNavigation, ProviderScreenNavigation } from '@/app/shared/hooks'
import { SCREENS, MetadataScreens } from './constants'
import { CSS, useTheme } from '@nextui-org/react'

type ScreenTagsProps = MetadataScreens & { containerCss?: CSS }

const ScreenTags = ({ containerListCss, containerCss }: ScreenTagsProps) => {
  const { theme } = useTheme()
  const screens = {
    [SCREENS.listTags]: <List />,
    [SCREENS.formTags]: <Form />
  }

  return (
    <ProviderScreenNavigation
      background={theme?.colors.backgroundContrast.value}
      pages={screens}
      currentPage={SCREENS.listTags}
      containerCss={containerCss}
      metadata={{
        containerListCss
      }}
    >
      {({ page, component, props, index }) => (
        <PageNavigation page={page} index={index} propsPage={props as object}>
          {component}
        </PageNavigation>
      )}
    </ProviderScreenNavigation>
  )
}

export default ScreenTags
