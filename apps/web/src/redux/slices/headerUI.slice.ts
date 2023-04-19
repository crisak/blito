import { createSlice } from '@reduxjs/toolkit'

export enum HeaderEvent {
  create = 'create',
  updateCategory = 'update'
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
    }
  }
})

export const headerUIActions = headerUItSlice.actions

export const headerUIReducer = headerUItSlice.reducer
