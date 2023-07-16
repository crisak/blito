'use client'

import { useEffect } from 'react'
import { TagService } from '@/app/shared/services'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { GlobalStore, globalActions } from '@/redux/slices'

import { useState } from 'react'
import type { CreateTagInput } from 'blito-models'
import { AContent, ATag } from '@/models'

const tagService = TagService.getInstance()

const useFetchTags = () => {
  const [loading, setLoading] = useState<{
    list: boolean
    create: boolean
    update: boolean
    delete: boolean
    contents: boolean
  }>({
    list: false,
    create: false,
    update: false,
    delete: false,
    contents: false
  })
  const [error, setError] = useState<unknown>()

  /** Store */
  const dispatch = useDispatch()
  const store = useSelector<AppStore, GlobalStore>((state) => state.global)

  const request = async () => {
    try {
      setLoading((prev) => ({
        ...prev,
        list: true
      }))
      const tags = await tagService.getAll()

      dispatch(globalActions.setListTags(tags))
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        return
      }

      setError(error)
    } finally {
      setLoading((prev) => ({
        ...prev,
        list: false
      }))
    }
  }

  const create = async (tag: CreateTagInput): Promise<boolean> => {
    try {
      setLoading((prev) => ({
        ...prev,
        create: true
      }))
      const newTag = await tagService.create(tag)
      dispatch(globalActions.createTag(newTag))
      return true
    } catch (error) {
      throw error
    } finally {
      setLoading((prev) => ({
        ...prev,
        create: false
      }))
    }
  }

  const update = async (tag: ATag): Promise<boolean> => {
    try {
      setLoading((prev) => ({
        ...prev,
        update: true
      }))

      const newTag = await tagService.update({
        id: tag.id,
        name: tag.name,
        _version: tag._version
      })

      dispatch(globalActions.updateTag(newTag))
      return true
    } catch (error) {
      throw error
    } finally {
      setLoading((prev) => ({
        ...prev,
        update: false
      }))
    }
  }

  const getContentsByTag = async (tag: ATag): Promise<AContent[]> => {
    try {
      setLoading((prev) => ({
        ...prev,
        contents: true
      }))

      const contents = await tagService.getContents(tag.id)
      return contents
    } catch (error) {
      throw error
    } finally {
      setLoading((prev) => ({
        ...prev,
        contents: false
      }))
    }
  }

  const remove = async (tag: ATag): Promise<boolean> => {
    try {
      setLoading((prev) => ({
        ...prev,
        delete: true
      }))

      const newTag = await tagService.delete({
        id: tag.id,
        _version: tag._version
      })

      dispatch(globalActions.deleteTag(newTag.id))
      return true
    } catch (error) {
      throw error
    } finally {
      setLoading((prev) => ({
        ...prev,
        delete: false
      }))
    }
  }

  useEffect(() => {
    ;(() => {
      /** Only set data if there not record in store(Redux)  */
      if (!store?.tags || store?.tags?.length === 0) {
        request()
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    list: store.tags,
    loading,
    error,
    refresh: request,
    create,
    update,
    remove,
    getContentsByTag
  }
}

export default useFetchTags