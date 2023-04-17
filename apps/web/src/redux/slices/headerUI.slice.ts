import { createSlice } from '@reduxjs/toolkit'

export enum HeaderEvent {
  create = 'create'
}

export type HeaderUIStore = {
  event: HeaderEvent | null
}

const initialState: HeaderUIStore = {
  event: null
}

const headerUItSlice = createSlice({
  name: 'headerUI',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      return {
        ...state,
        event: action.payload
      }
    }
  }
})

export const headerUIActions = headerUItSlice.actions

export const headerUIReducer = headerUItSlice.reducer
