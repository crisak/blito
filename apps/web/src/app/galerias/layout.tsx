import { Container } from '@/app/shared/ui'

type GalleryLayoutProps = { children: React.ReactNode }

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return <Container className="pt-unit-lg">{children}</Container>
}

export default GalleryLayout
