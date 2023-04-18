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
      const newCategory = action.payload

      return {
        ...state,
        category: [...state.category, newCategory]
      }
    }
  }
})

export const categoryActions = categorySlice.actions

export const categoryReducer = categorySlice.reducer
