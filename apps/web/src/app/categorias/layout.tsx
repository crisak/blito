'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'

const categoryBreadcrumbs = [
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

// /categorias/#{categoryId}/proyectos/#{projectId}
const getKeysPattern = (inputString: string) => {
  // Definir una expresión regular para encontrar patrones #{KEY}
  const pattern = /#{([^}]+)}/g

  // Utilizar el método match para obtener todas las coincidencias
  const matches = inputString.match(pattern) //  ['#{categoryId}', '#{projectId}']

  // Filtrar las claves encontradas
  return matches || []
}

// '#{categoryId}'
const getKey = (inputString?: string) => {
  return (inputString || '').slice(2, -1) // 'categoryId'
}

const Breadcrumb = () => {
  /**
    {
     "categoryId": "830f3d81-ba5d-453d-85b1-3f2eebd9dfb5",
     "projectId": "3e10638c-2e16-4703-80f5-408adb9745c6"
    }
   */
  const params = useParams()
  const pathName = usePathname()

  const filterBreadcrumbs = useMemo(() => {
    let finisLoop = false
    return categoryBreadcrumbs.reduce((prev, current) => {
      if (finisLoop) {
        return prev
      }

      let pathFilter = current.path
      if (getKeysPattern(current.path).length) {
        for (const patterKey of getKeysPattern(current.path)) {
          const keyParam = getKey(patterKey)
          if (params && params[keyParam]) {
            pathFilter = pathFilter.replace(patterKey, String(params[keyParam]))
          }
        }
      }

      if (pathFilter === pathName) {
        finisLoop = true
      }

      return [...prev, current]
      // return current
    }, [] as any[])
  }, [params, pathName])

  if (!filterBreadcrumbs.length || filterBreadcrumbs.length === 1) {
    return null
  }

  return (
    <nav className="w-full rounded-md text-sm">
      <ol className="list-reset flex">
        {filterBreadcrumbs.map(({ label, path }, index) => {
          const isLastItem = index + 1 === filterBreadcrumbs.length

          let filterPath = path
          let filterLabel = label

          /** Filter path */
          if (getKeysPattern(path).length) {
            getKeysPattern(path).forEach((keyPattern) => {
              const valueParam = String(params?.[getKey(keyPattern)] || '')
              filterPath = filterPath.replace(keyPattern, valueParam)
            })
          }

          /** Filter label */
          if (getKeysPattern(filterLabel).length) {
            const [matchKey] = getKeysPattern(filterLabel)
            filterLabel = String(params?.[getKey(matchKey)] || '')
          }
          return (
            <>
              <li
                className={clsx({
                  'text-neutral-500 dark:text-neutral-400': isLastItem
                })}
              >
                {isLastItem ? (
                  filterLabel
                ) : (
                  <Link
                    className={clsx(
                      'text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                    )}
                    href={filterPath}
                  >
                    {filterLabel}
                  </Link>
                )}
              </li>
              {!isLastItem && (
                <li>
                  <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                    /
                  </span>
                </li>
              )}
            </>
          )
        })}
      </ol>
    </nav>
  )
}

const CategoryLayout = ({ children }: any) => {
  return (
    <>
      <div className="container mx-auto my-unit-md">
        <Breadcrumb />
      </div>
      {children}
    </>
  )
}

export default CategoryLayout
