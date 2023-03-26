import { handleError, GraphQLUtil } from '@/utils'
import { AContent } from '@/models/ModelsAdapter.model'
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import {
  ListContentsQuery,
  listContents,
  GetContentQuery,
  getContent
} from 'blito-models'

export class ProjectService {
  static instance: ProjectService

  static getInstance(): ProjectService {
    if (!this.instance) {
      this.instance = new ProjectService()
    }
    return this.instance
  }

  async getAllByCategory(categoryId: string): Promise<AContent[]> {
    try {
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<ListContentsQuery>>(
        graphqlOperation(listContents, {
          filter: {
            contentCategoryId: {
              eq: categoryId
            }
          }
        })
      )

      if (!response || response?.errors || !response?.data?.listContents) {
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
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<GetContentQuery>>(
        graphqlOperation(getContent, {
          id: projectId
        })
      )

      if (!response || response?.errors || !response?.data?.getContent) {
        throw response
      }

      return GraphQLUtil.removeDefaultProps<AContent>(response.data.getContent)
    } catch (error) {
      throw handleError(error)
    }
  }
}
