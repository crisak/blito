import { AContentTag, ARContentByTag, ATag } from '@/models/ModelsAdapter.model'
import { GraphQLUtil, handleError, LogUtil } from '@/utils'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  CreateTagInput,
  DeleteContentTagInput,
  DeleteTagInput,
  ModelTagFilterInput,
  UpdateTagInput
} from 'blito-models'
import GraphQLService from '../GraphQL.Service'
import {
  createTag,
  deleteContentTag,
  deleteTag,
  listContentsByTag,
  listTags,
  updateTag
} from './Tag.query'
import {
  CreateTagMutation,
  DeleteTagContentMutation,
  DeleteTagMutation,
  ListContentsByTagQuery,
  ListTagsQuery,
  UpdateTagMutation
} from './Tag.type'

export class TagService extends GraphQLService {
  static instance: TagService

  static getInstance(): TagService {
    if (!this.instance) {
      this.instance = new TagService()
    }
    return this.instance
  }

  /** Public API */
  async getAll(): Promise<ATag[]> {
    try {
      const req = {
        query: listTags,
        variables: {
          filter: {} as ModelTagFilterInput
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListTagsQuery>>(req)
        .catch((err) => {
          LogUtil.errorDetail('TagService.getAll', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listTags) {
        LogUtil.errorDetail('TagService.getAll', response, req, {
          prettyError: true
        })

        throw response
      }

      /** TODO - Apply pagination */

      const items = response.data.listTags.items.filter(
        (item) => !item?._deleted
      )

      return GraphQLUtil.removeDefaultPropsOfList<ATag>(items || [])
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async create(tag: CreateTagInput): Promise<ATag> {
    try {
      const req = {
        query: createTag,
        variables: {
          input: tag
        }
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<CreateTagMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('TagService.create', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.createTag?.id) {
        LogUtil.errorDetail('TagService.create', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.createTag
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async update(tag: UpdateTagInput): Promise<ATag> {
    try {
      const req = {
        query: updateTag,
        variables: {
          input: tag
        }
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<UpdateTagMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('TagService.update', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.updateTag?.id) {
        LogUtil.errorDetail('TagService.update', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.updateTag
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Public */
  async getContentsByTag(tagId: ATag['id']): Promise<Array<ARContentByTag>> {
    try {
      const req = {
        query: listContentsByTag,
        variables: {
          filter: { tagId: { eq: tagId } }
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListContentsByTagQuery>>(req)
        .catch((err) => {
          LogUtil.errorDetail('getContentsByTag.getContents', err, req)
          return Promise.reject(err)
        })

      if (
        !response ||
        response?.errors ||
        !response?.data?.listContentTags?.items
      ) {
        LogUtil.errorDetail('getContentsByTag.getContents', response, req, {
          prettyError: true
        })

        throw response
      }

      return (
        response.data?.listContentTags?.items
          ?.filter((relationItem) =>
            Boolean(relationItem?.content?.id || !relationItem?._deleted)
          )
          .map<ARContentByTag>((relationItem: any) => {
            return relationItem
          }) || []
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async delete(tag: DeleteTagInput): Promise<ATag> {
    try {
      const req = {
        query: deleteTag,
        variables: {
          input: tag
        }
      }

      /**
       * {Action}-{Name}-{Type}
       *  Update Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<DeleteTagMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('TagService.delete', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.deleteTag?.id) {
        LogUtil.errorDetail('TagService.delete', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.deleteTag
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async deleteContentsByTag(
    contentsTagR: DeleteContentTagInput[]
  ): Promise<Array<AContentTag>> {
    try {
      if (!contentsTagR.length) {
        return []
      }

      const res = await Promise.allSettled(
        contentsTagR.map((contentTagR) => {
          const req = {
            query: deleteContentTag,
            variables: {
              input: contentTagR
            }
          }

          /**
           * {Action}-{Name}-{Type}
           *  Update Content Mutation
           */
          return this.getAPI()
            .graphql<GraphQLQuery<DeleteTagContentMutation>>(req)
            .catch((err) => {
              return Promise.reject(err)
            })
        })
      )

      const errors = res
        .filter((resp) => {
          if (resp.status === 'rejected') {
            return true
          }

          if (resp.status === 'fulfilled') {
            const result = resp.value
            return result.errors?.length || !result.data?.deleteContentTag?.id
          }

          return false
        })
        .map((resp: any) => resp.value)

      if (errors.length) {
        LogUtil.errorDetail(
          'TagService.deleteContentsByTag',
          errors,
          contentsTagR
        )

        throw errors
      }

      const result: Array<AContentTag> = []
      res.forEach((resp) => {
        if (resp.status === 'fulfilled') {
          if (resp.value.data?.deleteContentTag?.id) {
            result.push(resp.value.data.deleteContentTag)
          }
        }
      })

      return result
    } catch (error) {
      throw handleError(error)
    }
  }
}

export default TagService
