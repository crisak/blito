/* eslint-disable no-console */
'use client'

import { CollaboratorService } from '@/app/shared/services'
import { ACollaborator, ARContentByCollaborator } from '@/models'
import { FilesUtil, LogUtil } from '@/utils'
import { Storage } from 'aws-amplify'
import { CreateCollaboratorInput } from 'blito-models'
import { create } from 'zustand'

interface CollaboratorStore {
  loading:
    | 'create'
    | 'update'
    | 'delete'
    | 'list'
    | 'previewDelete'
    | 'photo'
    | ''
  list: ACollaborator[]
  contentsByCollaborator: Map<ACollaborator['id'], ARContentByCollaborator[]>

  getContentsByCollaborator: (
    collaboratorId: ACollaborator['id']
  ) => Promise<ARContentByCollaborator[]>
  getAll: (options?: { refresh?: boolean }) => Promise<void>
  update: (collaborator: ACollaborator) => Promise<void>
  create: (collaborator: CreateCollaboratorInput) => Promise<void>
  remove: (collaborator: ACollaborator) => Promise<void>
  updatePhoto: (collaborator: UpdatePhotoInput) => Promise<UpdatePhotoResult>
  removePhoto: (collaborator: RmPhotoInput) => Promise<UpdatePhotoResult>
  reset: () => void
}

type UpdatePhotoInput = UpdatePhoto & {
  file: File
}

type RmPhotoInput = UpdatePhoto & {
  urlSigned: string
}

type UpdatePhotoResult = UpdatePhoto & { urlSigned: string }

type UpdatePhoto = Partial<Pick<ACollaborator, 'id' | '_version'>>

const PATH_FILE_AVATAR = 'avatar-images'

const useCollaboratorStore = create<CollaboratorStore>((set, get) => {
  const collaboratorSrv = CollaboratorService.getInstance()

  return {
    loading: '',
    list: [],
    contentsByCollaborator: new Map(),

    getAll: async (opt) => {
      const { list } = get()

      if (!opt?.refresh && list.length > 0) {
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
          }).catch((err) => {
            LogUtil.warn('Fail load file', err, '\n🔎 Payload:', {
              url: collaborator.photoUrl,
              level: 'public',
              validateObjectExistence: true
            })
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

    updatePhoto: async (photoCollaborator) => {
      set({ loading: 'photo' })

      const { file, id, _version } = photoCollaborator

      const extension = FilesUtil.getExtension(file.name)
      const fileIdUnique = Date.now().toString()
      let pathFile = `${PATH_FILE_AVATAR}/${fileIdUnique}.${extension}`

      if (id) {
        pathFile = `${PATH_FILE_AVATAR}/${id}.${extension}`
      }

      const result = await Storage.put(pathFile, file, {
        level: 'public',
        contentType: file?.type
      }).catch((error) => {
        LogUtil.errorDetail('Error upload to s3', error, {
          pathFile,
          level: 'public',
          contentType: file?.type
        })

        set({ loading: '' })

        return Promise.reject(error)
      })

      const urlSigned = await Storage.get(pathFile, {
        level: 'public',
        validateObjectExistence: true
      }).catch((error) => {
        LogUtil.errorDetail('Error get url signed', error, {
          key: result.key,
          level: 'public'
        })

        return ''
      })

      if (id) {
        const resultCollaborator = await collaboratorSrv
          .update({
            id,
            _version,
            photoUrl: pathFile
          })
          .catch((err) => {
            set({ loading: '' })
            return Promise.reject(err)
          })

        set((state) => ({
          list: state.list.map((collaborator) => {
            if (collaborator.id === id) {
              return {
                ...collaborator,
                photoUrl: urlSigned,
                _version: resultCollaborator._version
              }
            }

            return collaborator
          }),
          loading: ''
        }))

        return {
          id: resultCollaborator.id,
          urlSigned,
          _version: resultCollaborator._version
        }
      }

      set({ loading: '' })
      return {
        id: '',
        urlSigned,
        _version: 0
      }
    },

    removePhoto: async (photoCollaborator) => {
      set({ loading: 'photo' })

      const { urlSigned, id, _version } = photoCollaborator

      let pathFile = FilesUtil.getKey(urlSigned)

      await Storage.remove(pathFile, {
        level: 'public'
      }).catch((error) => {
        LogUtil.errorDetail('Error remove file in s3', error, {
          pathFile,
          level: 'public'
        })

        set({ loading: '' })

        return Promise.reject(error)
      })

      if (id) {
        const resultCollaborator = await collaboratorSrv
          .update({
            id,
            _version,
            photoUrl: ''
          })
          .catch((err) => {
            set({ loading: '' })
            return Promise.reject(err)
          })

        set((state) => ({
          list: state.list.map((collaborator) => {
            if (collaborator.id === id) {
              return {
                ...collaborator,
                photoUrl: '',
                _version: resultCollaborator._version
              }
            }

            return collaborator
          }),
          loading: ''
        }))

        return {
          id: resultCollaborator.id,
          urlSigned: '',
          _version: resultCollaborator._version
        }
      }

      set({ loading: '' })
      return {
        id: '',
        urlSigned: '',
        _version: 0
      }
    },

    reset: () => {
      set({ loading: '', list: [], contentsByCollaborator: new Map() })
    }
  }
})

export default useCollaboratorStore
