import { handleError, GraphQLUtil } from '@/utils'
import { ACategory } from '@/models'
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import { ListCategoriesQuery, listCategories } from 'models'

export default class CategoryService {
  static instance: CategoryService

  static getInstance(): CategoryService {
    if (!this.instance) {
      this.instance = new CategoryService()
    }
    return this.instance
  }

  async getAll(): Promise<ACategory[]> {
    try {
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<ListCategoriesQuery>>(
        graphqlOperation(listCategories)
      )

      if (!response || response?.errors || !response?.data?.listCategories) {
        throw response
      }

      return GraphQLUtil.removeDefaultPropsOfList<ACategory>(
        response.data.listCategories.items
      )
    } catch (error) {
      throw handleError(error)
    }
  }
}
