import { Breadcrumb } from '@/app/shared/components'

const breadcrumbs = [
  { label: 'Categorías', path: '/categorias', params: null },
  {
    label: '#{categoryId}' /** Nombre de la categoría  */,
    path: '/categorias/#{categoryId}',
    params: { categoryId: true }
  },
  {
    label: 'Proyectos' /** Nombre de la categoría  */,
    path: '/categorias/#{categoryId}/proyectos',
    params: { categoryId: true }
  },
  {
    label: '#{projectId}' /** Nombre del proyecto  */,
    path: '/categorias/#{categoryId}/proyectos/#{projectId}',
    params: { categoryId: true, projectId: true }
  }
]

const CategoryLayout = ({ children }: any) => {
  return (
    <>
      <div className="container mx-auto my-unit-md">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      {children}
    </>
  )
}

export default CategoryLayout
