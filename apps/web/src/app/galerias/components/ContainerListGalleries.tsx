import { Text } from '@/app/shared/ui'
import { AContent } from '@/models'

type ContainerListGalleriesProps = {
  galleries: Array<AContent>
  children: (gallery: AContent, index: number) => React.ReactNode
}

const ContainerListGalleries = ({
  galleries = [],
  children
}: ContainerListGalleriesProps) => {
  if (galleries.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Text as="h2">No hay galerías</Text>
      </div>
    )
  }
  return (
    <section className="sm:px-unit-auto mx-auto grid auto-rows-[10px] grid-cols-[repeat(auto-fill,_183px)] justify-center px-unit-sm pt-unit-lg sm:grid-cols-[repeat(auto-fill,_250px)]">
      {galleries.map((gallery: any, index: number) => {
        return children(gallery, index)
      })}
    </section>
  )
}

export default ContainerListGalleries
