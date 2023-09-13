/* eslint-disable no-console */
import { ProjectService } from '@/app/shared/services'
import { Container } from '@/app/shared/ui'
import { AContent } from '@/models'
import CardGallery from './components/CardGallery'
import ContainerListGalleries from './components/ContainerListGalleries'

import HeaderGallery from './components/HeaderGallery'

const contentSrv = ProjectService.getInstance()

/**
 * @doc Page GalleriesPage
 * @link https://github.com/an-object-is-a/html-css-js-pinterest-layout/blob/main/index.html
 */
const GalleriesPage = async () => {
  const contents: Array<AContent> = await contentSrv.getAll()

  const galleries: Array<AContent> = [
    ...contents,
    ...contents.map(({ id, ...rest }, index) => ({
      ...rest,
      id: id + Date.now() + index
    }))
  ]

  return (
    <>
      <HeaderGallery />

      <Container>
        <ContainerListGalleries galleries={galleries}>
          {(gallery, index) => (
            <CardGallery key={gallery.id} {...gallery} index={index} />
          )}
        </ContainerListGalleries>
      </Container>
    </>
  )
}

export default GalleriesPage
