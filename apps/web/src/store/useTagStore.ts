/* eslint-disable no-console */
'use client'

import { TagService } from '@/app/shared/services/Tag'
import { ATag } from '@/models'
import { LogUtil } from '@/utils'
import { CreateTagInput } from 'blito-models'
import { create } from 'zustand'

interface TagStore {
  loading: 'create' | 'update' | 'delete' | 'list' | 'previewDelete' | ''
  list: ATag[]
  listContents: () => Promise<void>
  getList: () => Promise<void>
  update: (tag: ATag) => Promise<void>
  create: (tag: CreateTagInput) => Promise<void>
  reset: () => void
}

const useTagStore = create<TagStore>((set, get) => {
  const tagSrv = TagService.getInstance()

  return {
    loading: '',
    list: [],

    getList: async () => {
      const { list } = get()

      LogUtil.debug('getList.list', list)

      if (list.length > 0) {
        return
      }

      set({ loading: 'list' })

      const newList = await tagSrv.getAll()

      set({ list: newList, loading: '' })
    },

    update: async (newTag) => {
      const { list } = get()

      set({ loading: 'update' })

      const { _deleted, createdAt, updatedAt, ...restInput } = { ...newTag }

      const resultTag = await tagSrv.update(restInput)

      const newList = list.map((tab) => {
        if (tab.id === newTag.id) {
          return { ...tab, ...resultTag }
        }

        return { ...tab }
      })

      set({ list: newList, loading: '' })
    },

    create: async (newTag) => {
      const { list } = get()

      set({ loading: 'create' })

      const tagResponse = await tagSrv.create(newTag)

      const newList = [...list, tagResponse]

      set({ list: newList, loading: '' })
    },

    listContents: async () => {},

    reset: () => {
      set({ loading: '', list: [] })
    }
  }
})

export default useTagStore
