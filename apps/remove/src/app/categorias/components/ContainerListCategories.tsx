'use client'

import { useDispatch, useSelector } from 'react-redux'
import ContainerLinkCardCategory from './ContainerLinkCardCategory'
import { useEffect } from 'react'
import { CategoryStore, categoryActions } from '@/redux/slices'
import { AppStore } from '@/redux/store'
import { CategoryService, type GetAllWithContentResult } from '@/app/shared/services'
import { toast } from 'react-toastify'

interface ContainerListCategoriesProps {
  categories: GetAllWithContentResult[]
}

const categoryService = CategoryService.getInstance()

const ContainerListCategories = ({
  categories: categoriesStaticProps
}: ContainerListCategoriesProps) => {
  const dispatch = useDispatch()

  const headerUI = useSelector<AppStore, CategoryStore>(
    (state) => state.category
  )

  useEffect(() => {
    ;(async () => {
      /** Only set data if there not record in store(Redux)  */
      if (!headerUI?.category || headerUI?.category?.length === 0) {
        dispatch(categoryActions.setList(categoriesStaticProps))

        const id = toast.loading('Sincronizando datos...')
        try {
          const categories = await categoryService.getAllWithFiles()

          dispatch(categoryActions.setList(categories))
        } catch (error) {
          if (error instanceof Error) {
            toast(error?.message || '', {
              type: 'warning'
            })
            return
          }

          toast(`Error internal ${JSON.stringify(error)}`, {
            type: 'error'
          })
        } finally {
          toast.update(id, {
            render: 'Datos sincronizados',
            type: 'info',
            isLoading: false,
            closeButton: true,
            autoClose: 2000
          })
        }
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {(headerUI.category || []).map((category) => (
        <ContainerLinkCardCategory key={category.id} {...category} />
      ))}
    </>
  )
}
export default ContainerListCategories
