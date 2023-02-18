export type CategoriesSummaryContentsDto = CategoryDto[]

interface CategoryDto {
  id: string
  name: string
  description: string
  projects: Array<{
    id: string
    name: string
    date: string
    image: string
  }>
}
