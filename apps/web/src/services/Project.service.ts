import { handleError, GraphQLUtil } from '@/utils'
import { AContent } from '@/models/ModelsAdapter.model'
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import { ListContentsQuery, listContents } from 'models'

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
}
