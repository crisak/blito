'use client'

import useBreadcrumbStore from '@/store/useBreadcrumbStore'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'

type BreadcrumbItem<T = unknown> = {
  label: string
  path: string
  params: T
}

/**
 * Example
 * /categorias/#{categoryId}/proyectos/#{projectId}
 * @example
 * Output: ['#{categoryId}', '#{projectId}']
 */
const getKeysPattern = (inputString: string) => {
  /** Definir una expresión regular para encontrar patrones #{KEY} */
  const pattern = /#{([^}]+)}/g

  /** Utilizar el método match para obtener todas las coincidencias */
  const matches = inputString.match(pattern) //  ['#{categoryId}', '#{projectId}']

  /** Filtrar las claves encontradas */
  return matches || []
}

/**
 *
 * @example
 * Input: '#{categoryId}'
 * Output: 'categoryId'
 */
const getKey = (inputString?: string) => {
  return (inputString || '').slice(2, -1) // 'categoryId'
}

type BreadcrumbProps = {
  breadcrumbs: BreadcrumbItem[]
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  /**
    {
     "categoryId": "830f3d81-ba5d-453d-85b1-3f2eebd9dfb5",
     "projectId": "3e10638c-2e16-4703-80f5-408adb9745c6"
    }
    */
  const params = useParams()
  const pathName = usePathname()
  const [getValueParam] = useBreadcrumbStore((store) => [store.get, store.list])

  const filterBreadcrumbs = useMemo(() => {
    let finisLoop = false
    return breadcrumbs.reduce((prev, current) => {
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
    }, [] as BreadcrumbItem[])
  }, [params, pathName, breadcrumbs])

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
            const idParam = String(params?.[getKey(matchKey)] || '')
            filterLabel = getValueParam(getKey(matchKey)) || idParam
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

export default Breadcrumb
