import type { GetAllWithContentResult } from '@/app/services'
import { createSlice } from '@reduxjs/toolkit'

export type CategoryStore = {
  category: GetAllWithContentResult[]
}

const initialState: CategoryStore = {
  category: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setList: (state, action) => {
      const listCategory = [...action.payload] as GetAllWithContentResult[]
      return {
        ...state,
        category: listCategory
      }
    },
    create: (state, action) => {
      const newCategory = action.payload as GetAllWithContentResult

      return {
        ...state,
        category: [...state.category, newCategory]
      }
    },
    update: (state, action) => {
      const { id, ...categoryUpdate } =
        action.payload as GetAllWithContentResult

      return {
        ...state,
        category: state.category.map((cat) => {
          if (cat.id === id) {
            return { id, ...categoryUpdate }
          }

          return { ...cat }
        })
      }
    },
    remove: (state, action) => {
      const categoryId = action.payload as string

      return {
        ...state,
        category: state.category.filter(({ id }) => id !== categoryId)
      }
    }
  }
})

export const categoryActions = categorySlice.actions

export const categoryReducer = categorySlice.reducer
