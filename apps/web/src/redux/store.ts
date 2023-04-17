import { configureStore } from '@reduxjs/toolkit'
import { projectReducer, ProjectStore, AuthStore, authReducer } from './slices'

interface AppStore {
  project: ProjectStore
  auth: AuthStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer,
    auth: authReducer
  }
})

export default store
export type { AppStore, ProjectStore, AuthStore }
