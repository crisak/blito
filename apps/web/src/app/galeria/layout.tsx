import { Container } from '@/app/shared/ui'

type GalleryLayoutProps = { children: React.ReactNode }

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return <Container>{children}</Container>
}

export default GalleryLayout
