import { AContent, AFullContent } from '@/models/ModelsAdapter.model'
import { GraphQLUtil, handleError, LogUtil } from '@/utils'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'

import {
  GetContentQuery,
  ListContentsQuery,
  ListContentsQueryVariables,
  ModelContentFilterInput
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
      const listContents = /* GraphQL */ `
        query ListContents(
          $filter: ModelContentFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              type
              time
              size
              project {
                name
                description
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
              }
              date
              location {
                country
                state
                city
                street
                position {
                  latitude
                  longitude
                }
              }
              colors
              views
              createdAt
              updatedAt
              _version
              _deleted
              contentCategoryId
            }
            nextToken
            startedAt
          }
        }
      `

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
            payloadReq,
            { prettyError: err?.errors?.length }
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

  async getAll({ nextToken = undefined } = {}): Promise<AContent[]> {
    try {
      const listContents = /* GraphQL */ `
        query ListContents(
          $filter: ModelContentFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              type
              time
              size
              project {
                name
                description
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
              }
              date
              location {
                country
                state
                city
                street
                position {
                  latitude
                  longitude
                }
              }
              colors
              views
              createdAt
              updatedAt
              _version
              _deleted
              contentCategoryId
            }
            nextToken
            startedAt
          }
        }
      `

      const payloadReq = {
        query: listContents,
        variables: {
          filter: {} as ModelContentFilterInput
          // nextToken
        } as ListContentsQueryVariables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }

      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListContentsQuery>>(payloadReq)
        .catch((err) => {
          LogUtil.errorDetail('ProjectService.getAll', err, payloadReq, {
            prettyError: err?.errors?.length
          })
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listContents) {
        LogUtil.errorDetail('ProjectService.getAll', response, payloadReq, {
          prettyError: true
        })
        throw response
      }

      return GraphQLUtil.removeDefaultPropsOfList<AContent>(
        response.data.listContents.items
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  async getById(projectId: string): Promise<AFullContent> {
    try {
      if (!projectId) {
        throw new Error('ProjectId params not exits')
      }

      const getContent = /* GraphQL */ `
        query GetContent($id: ID!) {
          getContent(id: $id) {
            id
            type
            time
            size
            project {
              name
              description
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
            }
            date
            location {
              country
              state
              city
              street
              position {
                latitude
                longitude
              }
            }
            colors
            views
            Tags {
              items {
                id
                contentId
                tagId
                tag {
                  id
                  name
                  createdAt
                  updatedAt
                  _version
                  _deleted
                }
                createdAt
                updatedAt
                _version
                _deleted
              }
              nextToken
              startedAt
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
            }
            Collaborators {
              items {
                id
                contentId
                collaboratorId
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                  }
                  fullName
                  photoUrl
                  createdAt
                  updatedAt
                  _version
                  _deleted
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            contentCategoryId
          }
        }
      `

      /**
       * project.Tags
       * project.Collaborators
       * project.Category
       */
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
          LogUtil.errorDetail('ProjectService.getById', err, payloadReq, {
            prettyError: err?.errors?.length
          })
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.getContent) {
        LogUtil.errorDetail('ProjectService.getById', response, payloadReq, {
          prettyError: true
        })
        throw response
      }

      return GraphQLUtil.removeDefaultProps<AFullContent>(
        response.data.getContent
      )
    } catch (error) {
      throw handleError(error)
    }
  }
}
