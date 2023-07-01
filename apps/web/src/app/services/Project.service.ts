import { handleError, GraphQLUtil, LogUtil } from '@/utils'
import { AContent } from '@/models/ModelsAdapter.model'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'

import {
  ListContentsQuery,
  listContents,
  GetContentQuery,
  getContent
} from 'blito-models'
import GraphQLService from './GraphQL.Service'

export default class ProjectService extends GraphQLService {
  static instance: ProjectService

  static getInstance(): ProjectService {
    if (!this.instance) {
      this.instance = new ProjectService()
    }
    return this.instance
  }

  async getAllByCategory(categoryId: string): Promise<AContent[]> {
    try {
      const payloadReq = {
        query: listContents,
        variables: {
          filter: {
            contentCategoryId: {
              eq: categoryId
            }
          }
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }

      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListContentsQuery>>(payloadReq)
        .catch((err) => {
          LogUtil.errorDetail(
            'ProjectService.getAllByCategory',
            err,
            payloadReq
          )
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listContents) {
        LogUtil.errorDetail(
          'ProjectService.getAllByCategory',
          response,
          payloadReq,
          { prettyError: true }
        )
        throw response
      }

      return GraphQLUtil.removeDefaultPropsOfList<AContent>(
        response.data.listContents.items
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  async getById(projectId: string): Promise<AContent> {
    try {
      if (!projectId) {
        throw new Error('ProjectId params not exits')
      }

      const payloadReq = {
        query: getContent,
        variables: {
          id: projectId
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }

      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<GetContentQuery>>(payloadReq)
        .catch((err) => {
          LogUtil.errorDetail('ProjectService.getById', err, payloadReq)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.getContent) {
        LogUtil.errorDetail('ProjectService.getById', response, payloadReq, {
          prettyError: true
        })
        throw response
      }

      return GraphQLUtil.removeDefaultProps<AContent>(response.data.getContent)
    } catch (error) {
      throw handleError(error)
    }
  }
}
