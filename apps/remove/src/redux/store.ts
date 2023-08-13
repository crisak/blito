import { configureStore } from '@reduxjs/toolkit'
import {
  projectReducer,
  ProjectStore,
  AuthStore,
  authReducer,
  headerUIReducer,
  HeaderUIStore,
  CategoryStore,
  categoryReducer,
  GlobalStore,
  globalReducer
} from './slices'

interface AppStore {
  project: ProjectStore
  auth: AuthStore
  headerUI: HeaderUIStore
  category: CategoryStore
  global: GlobalStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer,
    auth: authReducer,
    headerUI: headerUIReducer,
    category: categoryReducer,
    global: globalReducer
  }
})

export default store
export type { AppStore, ProjectStore, AuthStore }
