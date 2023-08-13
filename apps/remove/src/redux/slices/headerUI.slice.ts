import { createSlice } from '@reduxjs/toolkit'

export enum HeaderEvent {
  create = 'createCategory',
  updateCategory = 'updateCategory',
  removeCategory = 'removeCategory'
}

export type HeaderUIStore<T = any> = {
  event: HeaderEvent | null
  data: T | null
}

const initialState: HeaderUIStore = {
  event: null,
  data: null
}

const headerUItSlice = createSlice({
  name: 'headerUI',
  initialState,
  reducers: {
    resetEvent: () => {
      return initialState
    },
    setEventCreate: (state) => {
      return {
        ...state,
        data: null,
        event: HeaderEvent.create
      }
    },
    setEventUpdateCategory: (state, action) => {
      return {
        ...state,
        event: HeaderEvent.updateCategory,
        data: action.payload || null
      }
    },
    setEventRemoveCategory: (state, action) => {
      return {
        ...state,
        event: HeaderEvent.removeCategory,
        data: action.payload || null
      }
    }
  }
})

export const headerUIActions = headerUItSlice.actions

export const headerUIReducer = headerUItSlice.reducer
