/* eslint-disable no-console */
'use client'

import { CollaboratorService } from '@/app/shared/services'
import { ACollaborator, ARContentByCollaborator } from '@/models'
import { FilesUtil, LogUtil } from '@/utils'
import { Storage } from 'aws-amplify'
import { CreateCollaboratorInput } from 'blito-models'
import { create } from 'zustand'

interface CollaboratorStore {
  loading: 'create' | 'update' | 'delete' | 'list' | 'previewDelete' | ''
  list: ACollaborator[]
  contentsByCollaborator: Map<ACollaborator['id'], ARContentByCollaborator[]>

  getContentsByCollaborator: (
    collaboratorId: ACollaborator['id']
  ) => Promise<ARContentByCollaborator[]>
  getAll: () => Promise<void>
  update: (collaborator: ACollaborator) => Promise<void>
  create: (collaborator: CreateCollaboratorInput) => Promise<void>
  remove: (collaborator: ACollaborator) => Promise<void>
  reset: () => void
}

const useCollaboratorStore = create<CollaboratorStore>((set, get) => {
  const collaboratorSrv = CollaboratorService.getInstance()

  return {
    loading: '',
    list: [],
    contentsByCollaborator: new Map(),

    getAll: async () => {
      const { list } = get()

      if (list.length > 0) {
        return
      }
      set({ loading: 'list' })

      const newList = await collaboratorSrv.getAll().catch((err) => {
        set({ loading: '' })
        return Promise.reject(err)
      })

      const lsImageFilter = await Promise.all(
        newList.map(async (collaborator) => {
          if (!collaborator.photoUrl) {
            return collaborator
          }

          const urlImage = await Storage.get(collaborator.photoUrl, {
            level: 'public',
            validateObjectExistence: true
          }).catch(() => {
            return ''
          })

          return {
            ...collaborator,
            photoUrl: urlImage
          }
        })
      )

      set({ list: lsImageFilter, loading: '' })
    },

    update: async (newTag) => {
      const { list } = get()
      set({ loading: 'update' })

      const urlSinged = newTag.photoUrl
      newTag.photoUrl = FilesUtil.getKey(urlSinged)

      const { _deleted, createdAt, updatedAt, ...restInput } = { ...newTag }

      const resultTag = await collaboratorSrv.update(restInput).catch((err) => {
        set({ loading: '' })
        return Promise.reject(err)
      })

      const newList = list.map((tab) => {
        if (tab.id === newTag.id) {
          return { ...tab, ...resultTag, photoUrl: urlSinged }
        }
        return { ...tab }
      })

      set({ list: newList, loading: '' })
    },

    create: async (newTag) => {
      const { list } = get()
      set({ loading: 'create' })

      const urlSinged = newTag.photoUrl
      newTag.photoUrl = FilesUtil.getKey(urlSinged)

      const collaboratorResponse = await collaboratorSrv
        .create(newTag)
        .catch((err) => {
          set({ loading: '' })
          return Promise.reject(err)
        })

      const newList = [
        ...list,
        {
          ...collaboratorResponse,
          photoUrl: urlSinged
        }
      ]

      set({ list: newList, loading: '' })
    },

    remove: async (collaboratorRm: ACollaborator) => {
      const { contentsByCollaborator: contentsByTag } = get()
      set({ loading: 'delete' })

      const contentsTag = contentsByTag.get(collaboratorRm.id) || []

      if (collaboratorRm.photoUrl) {
        await Storage.remove(FilesUtil.getKey(collaboratorRm.photoUrl)).catch(
          (err) => {
            LogUtil.errorDetail('Error move avatar', err, {
              pathFile: collaboratorRm.photoUrl
            })
            return
          }
        )
      }

      await collaboratorSrv
        .deleteContentsRelation(
          contentsTag.map((ct) => ({
            id: ct.id,
            _version: ct._version
          }))
        )
        .catch((err) => {
          set({ loading: '' })
          return Promise.reject(err)
        })

      contentsByTag.delete(collaboratorRm.id)

      await collaboratorSrv
        .delete({
          id: collaboratorRm.id,
          _version: collaboratorRm._version
        })
        .finally(() => set({ loading: '' }))

      set((state) => ({
        list: state.list.filter(({ id }) => id !== collaboratorRm.id),
        contentsByCollaborator: contentsByTag
      }))
    },

    getContentsByCollaborator: async (collaboratorId: ACollaborator['id']) => {
      const { contentsByCollaborator: contentsByTag } = get()
      const contentsState = contentsByTag.get(collaboratorId)

      if (
        (contentsState && contentsState?.length > 0) ||
        contentsByTag.has(collaboratorId)
      ) {
        return contentsState || []
      }

      set({ loading: 'previewDelete' })

      const contents = await collaboratorSrv
        .getContentsByCollaborator(collaboratorId)
        .finally(() => set({ loading: '' }))

      contentsByTag.set(collaboratorId, contents)

      set({ contentsByCollaborator: contentsByTag })
      return contents
    },

    reset: () => {
      set({ loading: '', list: [], contentsByCollaborator: new Map() })
    }
  }
})

export default useCollaboratorStore
