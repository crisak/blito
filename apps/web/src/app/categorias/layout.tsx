import { Container, Text } from '@/app/components'

type CategoryLayoutProps = { children: React.ReactNode }

const CategoryLayout = ({ children }: CategoryLayoutProps) => {
  return <Container header={<Text h2>Categorías</Text>}>{children}</Container>
}

export default CategoryLayout
