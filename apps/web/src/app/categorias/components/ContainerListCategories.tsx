'use client'

import { useDispatch, useSelector } from 'react-redux'
import ContainerLinkCardCategory from './ContainerLinkCardCategory'
import { useEffect } from 'react'
import { CategoryStore, categoryActions } from '@/redux/slices'
import { AppStore } from '@/redux/store'
import { CategoryService } from '@/app/services'
import { useState } from 'react'
import { LoadingProgress } from '@/app/components'

interface ContainerListCategoriesProps {}

const categoryService = CategoryService.getInstance()

const ContainerListCategories = ({}: ContainerListCategoriesProps) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const headerUI = useSelector<AppStore, CategoryStore>(
    (state) => state.category
  )

  useEffect(() => {
    ;(async () => {
      try {
        const categories = await categoryService.getAllWithFiles()
        dispatch(categoryActions.setList(categories))
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <LoadingProgress />
  }

  return (
    <>
      {(headerUI.category || []).map((category) => (
        <ContainerLinkCardCategory key={category.id} {...category} />
      ))}
    </>
  )
}

export default ContainerListCategories
