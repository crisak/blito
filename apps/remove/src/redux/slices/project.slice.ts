import { AContent } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export type ProjectStore = {
  active: AContent | null
  list: AContent[]
  projectEdit: AContent | null
}

const initialState: ProjectStore = {
  active: null,
  list: [],
  projectEdit: null
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProject: (state, action) => {
      const newProject = action.payload

      return {
        ...state,
        list: [...state.list, newProject],
        active: newProject
      }
    },
    loadProjects: (state, action) => {
      return {
        ...state,
        list: action.payload
      }
    },
    updateProject: (state) => {
      return state
    },
    resetProject: () => {
      return initialState
    }
  }
})

export const { createProject, updateProject, resetProject, loadProjects } =
  projectSlice.actions

export const projectReducer = projectSlice.reducer
