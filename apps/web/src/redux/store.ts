import { configureStore } from '@reduxjs/toolkit'
import {
  projectReducer,
  ProjectStore,
  AuthStore,
  authReducer,
  headerUIReducer,
  HeaderUIStore,
  CategoryStore,
  categoryReducer
} from './slices'

interface AppStore {
  project: ProjectStore
  auth: AuthStore
  headerUI: HeaderUIStore
  category: CategoryStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer,
    auth: authReducer,
    headerUI: headerUIReducer,
    category: categoryReducer
  }
})

export default store
export type { AppStore, ProjectStore, AuthStore }
