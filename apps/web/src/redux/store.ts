import { configureStore } from '@reduxjs/toolkit'
import {
  projectReducer,
  ProjectStore,
  AuthStore,
  authReducer,
  headerUIReducer,
  HeaderUIStore
} from './slices'

interface AppStore {
  project: ProjectStore
  auth: AuthStore
  headerUI: HeaderUIStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer,
    auth: authReducer,
    headerUI: headerUIReducer
  }
})

export default store
export type { AppStore, ProjectStore, AuthStore }
