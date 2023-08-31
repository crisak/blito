/* eslint-disable no-console */
'use client'

import { create } from 'zustand'

interface BreadcrumbStore {
  list: Map<string, string>
  getAll: () => Map<string, string>
  get: (key: string) => string
  set: (key: string, value: string) => void
  reset: () => void
}

const useBreadcrumbStore = create<BreadcrumbStore>((set, get) => {
  return {
    list: new Map(),

    getAll: () => {
      const { list } = get()

      return list
    },

    get: (key) => {
      const { list } = get()

      return list.get(key) || ''
    },

    set: (key, value) => {
      const { list } = get()
      if (list.get(key)) {
        return
      }

      if (!key || !value) {
        return
      }

      list.set(key, value)
      set({ list })
    },

    reset: () => {
      set({ list: new Map() })
    }
  }
})

export default useBreadcrumbStore
