import { configureStore } from '@reduxjs/toolkit'
import {
  categoryReducer,
  CategoryStore,
  globalReducer,
  GlobalStore,
  headerUIReducer,
  HeaderUIStore,
  projectReducer,
  ProjectStore
} from './slices'

interface AppStore {
  project: ProjectStore
  headerUI: HeaderUIStore
  category: CategoryStore
  global: GlobalStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer,
    headerUI: headerUIReducer,
    category: categoryReducer,
    global: globalReducer
  }
})

export default store
export type { AppStore, ProjectStore }
