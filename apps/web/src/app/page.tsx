import { API, Amplify } from 'aws-amplify'
import { categoryService } from '@/services'
import Home from './components/Home'
import { awsExports } from 'amplify'

Amplify.configure({ ...awsExports, ssr: true })

const HomePage = async () => {
  const { data: categories, error } =
    await categoryService.getCategoriesSummaryContents()

  if (error) {
    return (
      <div>{error instanceof Error ? error?.message : 'Internal server'}</div>
    )
  }

  if (!categories) {
    return <div>Datos no encontrados</div>
  }

  return <Home categories={categories} />
}

export default HomePage
