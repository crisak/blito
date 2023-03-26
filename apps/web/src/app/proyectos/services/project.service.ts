import { handleError } from '@/utils'
import { AContent, RmDefaultParameter } from '@/models'
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api'
import { API } from 'aws-amplify'
import { File, ListContentsQuery, Location } from 'blito-models'

export type ProjectFile = Omit<RmDefaultParameter<File>, 'size'>

export type Project = Pick<AContent, 'id' | 'type' | 'date'> & {
  files: ProjectFile
  location: Pick<Location, 'city'>
}

export default class ProjectService {
  static instance: ProjectService

  static getInstance(): ProjectService {
    if (!this.instance) {
      this.instance = new ProjectService()
    }
    return this.instance
  }

  async getAll(): Promise<string[]> {
    try {
      const queryLoadProjects = /* GraphQL */ `
        query LoadProjects($categoryId: ID!) {
          listContents(
            filter: {
              type: { ne: GALLERY }
              contentCategoryId: { eq: $categoryId }
            }
          ) {
            items {
              id
              type
              date
              files {
                mimeType
                type
                data
                isBanner
                caption
              }
              location {
                city
              }
            }
          }
        }
      `

      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<ListContentsQuery>>(
        graphqlOperation(queryLoadProjects)
      )

      if (!response || response?.errors || !response?.data?.listContents) {
        throw response
      }

      // return (response.data.listContents.items || []) as Project[]
      return []
    } catch (error) {
      throw handleError(error)
    }
  }
}
