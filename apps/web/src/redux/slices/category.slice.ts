import { createSlice } from '@reduxjs/toolkit'
import { Category } from 'blito-models'

export type CategoryStore = {
  category: Category[]
}

const initialState: CategoryStore = {
  category: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    create: (state, action) => {
      const newCategory = action.payload as Category

      return {
        ...state,
        category: [...state.category, newCategory]
      }
    },
    update: (state, action) => {
      const { id, ...categoryUpdate } = action.payload as Category

      return {
        ...state,
        category: state.category.map((cat) => {
          if (cat.id === id) {
            return { id, ...categoryUpdate }
          }

          return { ...cat }
        })
      }
    }
  }
})

export const categoryActions = categorySlice.actions

export const categoryReducer = categorySlice.reducer
