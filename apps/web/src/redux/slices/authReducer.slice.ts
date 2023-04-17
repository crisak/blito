import { AuthSession } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

export type AuthStore = {
  isAuth: boolean
  user: AuthSession | null
}

const initialState: AuthStore = {
  isAuth: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isAuth: true,
        user: action.payload as AuthSession
      }
    },
    logout: () => {
      return initialState
    }
  }
})

export const authSliceActions = authSlice.actions

export const authReducer = authSlice.reducer
