/* eslint-disable no-console */
'use client'

import { AuthService } from '@/app/shared/services'
import { AuthSession } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  /** Info of Cognito Amplify */
  authSession: AuthSession | null | undefined
  isAuthenticate: boolean

  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  reset: () => void
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => {
      return {
        authSession: null,
        isAuthenticate: false,

        login: async (username: string, password: string) => {
          const authData = await AuthService.login({
            username,
            password
          })

          if (!authData) {
            throw new Error('Error on login')
          }

          set({ authSession: authData, isAuthenticate: true })
        },

        logout: async () => {
          await AuthService.logout()
          set({ authSession: null, isAuthenticate: false })
        },

        checkAuth: async () => {
          const { authSession } = get()
          const { status, data } = await AuthService.getCurrentSession()

          AuthService.getAuthData(data as any)

          if (!status) {
            await AuthService.logout()
            set({ authSession: null, isAuthenticate: false })
            return
          }

          if (!authSession && data) {
            set({
              authSession: AuthService.getAuthData(data),
              isAuthenticate: true
            })
          }
        },

        reset: () => {
          set({ authSession: null, isAuthenticate: false })
        }
      }
    },
    {
      name: 'auth-store'
    }
  )
)

export default useAuthStore
