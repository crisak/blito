import { GraphQLUtil, handleError, LogUtil } from '@/utils'
import { ATag } from '@/models/ModelsAdapter.model'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  CreateTagInput,
  ModelTagFilterInput,
  updateTag,
  UpdateTagInput
} from 'blito-models'
import GraphQLService from '../GraphQL.Service'
import { listTags, createTag } from './Tag.query'
import { ListTagsQuery, CreateTagMutation, UpdateTagMutation } from './Tag.type'

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
}

export default TagService
