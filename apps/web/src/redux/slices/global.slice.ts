import { createSlice } from '@reduxjs/toolkit'

import { ACollaborator, ATag } from '@/models'
import { PayloadInput } from '@/types'

export type GlobalStore = {
  tags: ATag[]
  collaborators: ACollaborator[]
}

const initialState: GlobalStore = {
  tags: [],
  collaborators: []
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setListTags: (state, action: PayloadInput<ATag[]>) => {
      const newList = [...action.payload]
      return {
        ...state,
        tags: newList
      }
    },
    createTag: (state, action: PayloadInput<ATag>) => {
      const newTag = { ...action.payload }

      return {
        ...state,
        tags: [...state.tags, newTag]
      }
    },
    updateTag: (state, action: PayloadInput<ATag>) => {
      const { id, ...tagUpdate } = action.payload

      return {
        ...state,
        tags: state.tags.map((tab) => {
          if (tab.id === id) {
            return { id, ...tagUpdate }
          }

          return { ...tab }
        })
      }
    },
    deleteTag: (state, action: PayloadInput<ATag['id']>) => {
      const tagId = action.payload

      return {
        ...state,
        tags: state.tags.filter(({ id }) => id !== tagId)
      }
    }
  }
})

export const globalActions = globalSlice.actions

export const globalReducer = globalSlice.reducer
