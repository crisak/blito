'use client'

import type { GetAllWithContentResult } from '@/services'
import { useDispatch, useSelector } from 'react-redux'
import ContainerLinkCardCategory from './ContainerLinkCardCategory'
import { useEffect } from 'react'
import { CategoryStore, categoryActions } from '@/redux/slices'
import { AppStore } from '@/redux/store'

interface ContainerListCategoriesProps {
  categories: GetAllWithContentResult[]
}

const ContainerListCategories = ({
  categories
}: ContainerListCategoriesProps) => {
  const dispatch = useDispatch()
  const headerUI = useSelector<AppStore, CategoryStore>(
    (state) => state.category
  )

  useEffect(() => {
    dispatch(categoryActions.setList(categories))
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
