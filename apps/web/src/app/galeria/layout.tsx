import { Container } from '@/app/components'

type GalleryLayoutProps = { children: React.ReactNode }

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return <Container>{children}</Container>
}

export default GalleryLayout
