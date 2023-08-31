/* eslint-disable no-console */
'use client'

import { TagService } from '@/app/shared/services/Tag'
import { ARContentByTag, ATag } from '@/models'
import { CreateTagInput } from 'blito-models'
import { create } from 'zustand'

interface TagStore {
  loading: 'create' | 'update' | 'delete' | 'list' | 'previewDelete' | ''
  list: ATag[]
  contentsByTag: Map<ATag['id'], ARContentByTag[]>
  getContentsByTag: (tagId: ATag['id']) => Promise<ARContentByTag[]>
  getAll: () => Promise<void>
  update: (tag: ATag) => Promise<void>
  create: (tag: CreateTagInput) => Promise<void>
  remove: (tag: ATag) => Promise<void>
  reset: () => void
}

const useTagStore = create<TagStore>((set, get) => {
  const tagSrv = TagService.getInstance()

  return {
    loading: '',
    list: [],
    contentsByTag: new Map(),

    getAll: async () => {
      const { list } = get()

      if (list.length > 0) {
        return
      }
      set({ loading: 'list' })
      const newList = await tagSrv.getAll().finally(() => set({ loading: '' }))

      set({ list: newList })
    },

    update: async (newTag) => {
      const { list } = get()
      set({ loading: 'update' })

      const { _deleted, createdAt, updatedAt, ...restInput } = { ...newTag }
      const resultTag = await tagSrv
        .update(restInput)
        .finally(() => set({ loading: '' }))

      const newList = list.map((tab) => {
        if (tab.id === newTag.id) {
          return { ...tab, ...resultTag }
        }
        return { ...tab }
      })

      set({ list: newList })
    },

    create: async (newTag) => {
      const { list } = get()
      set({ loading: 'create' })

      const tagResponse = await tagSrv
        .create(newTag)
        .finally(() => set({ loading: '' }))

      const newList = [...list, tagResponse]

      set({ list: newList })
    },

    remove: async (tagRm: ATag) => {
      const { list, contentsByTag } = get()
      set({ loading: 'delete' })

      const contentsTag = contentsByTag.get(tagRm.id) || []

      await tagSrv
        .deleteContentsByTag(
          contentsTag.map((ct) => ({
            id: ct.id,
            _version: ct._version
          }))
        )
        .catch((err) => {
          set({ loading: '' })
          return Promise.reject(err)
        })

      contentsByTag.delete(tagRm.id)

      await tagSrv
        .delete({
          id: tagRm.id,
          _version: tagRm._version
        })
        .finally(() => set({ loading: '' }))

      set((state) => ({
        list: state.list.filter(({ id }) => id !== tagRm.id),
        contentsByTag
      }))
    },

    getContentsByTag: async (tagId: ATag['id']) => {
      const { contentsByTag } = get()
      const contentsState = contentsByTag.get(tagId)

      if (
        (contentsState && contentsState?.length > 0) ||
        contentsByTag.has(tagId)
      ) {
        return contentsState || []
      }

      set({ loading: 'previewDelete' })

      const contents = await tagSrv
        .getContentsByTag(tagId)
        .finally(() => set({ loading: '' }))

      contentsByTag.set(tagId, contents)

      set({ contentsByTag })
      return contents
    },

    reset: () => {
      set({ loading: '', list: [], contentsByTag: new Map() })
    }
  }
})

export default useTagStore
