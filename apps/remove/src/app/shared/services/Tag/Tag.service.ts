import { GraphQLUtil, handleError, LogUtil } from '@/utils'
import { AContent, ATag } from '@/models/ModelsAdapter.model'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  CreateTagInput,
  DeleteTagInput,
  ModelTagFilterInput,
  updateTag,
  UpdateTagInput
} from 'blito-models'
import GraphQLService from '../GraphQL.Service'
import { listTags, createTag, deleteTag, getContentsByTag } from './Tag.query'
import {
  ListTagsQuery,
  CreateTagMutation,
  UpdateTagMutation,
  GetContentsByTagQuery,
  DeleteTagMutation
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
        (item) => item?._deleted !== true
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
  async getContents(tagId: ATag['id']): Promise<Array<AContent>> {
    try {
      const req = {
        query: getContentsByTag,
        variables: {
          id: tagId
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<GetContentsByTagQuery>>(req)
        .catch((err) => {
          LogUtil.errorDetail('TagService.getContents', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.getTag?.id) {
        LogUtil.errorDetail('TagService.getContents', response, req, {
          prettyError: true
        })

        throw response
      }

      return (
        response.data?.getTag?.contents?.items
          .filter((relationItem) => Boolean(relationItem?.content?.id))
          .map<AContent>((relationItem: any) => {
            return relationItem.content
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
       *  Update  Content Mutation
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
}

export default TagService
