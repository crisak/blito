import {
  ACollaborator,
  AContentCollaborator,
  ARContentByCollaborator
} from '@/models'
import { GraphQLUtil, handleError, LogUtil } from '@/utils'
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {
  CreateCollaboratorInput,
  DeleteCollaboratorInput,
  DeleteContentCollaboratorInput,
  ModelCollaboratorFilterInput,
  ModelContentCollaboratorFilterInput,
  UpdateCollaboratorInput
} from 'blito-models'
import GraphQLService from '../GraphQL.Service'
import {
  createCollaborator,
  deleteCollaborator,
  deleteContentCollaborator,
  listCollaborators,
  listContentsByCollaborator,
  updateCollaborator
} from './Collaborator.query'
import {
  CreateCollaboratorMutation,
  DeleteCollaboratorContentMutation,
  DeleteCollaboratorMutation,
  ListCollaboratorsQuery,
  ListContentsByCollaboratorQuery,
  UpdateCollaboratorMutation
} from './Collaborator.type'

export class CollaboratorService extends GraphQLService {
  static instance: CollaboratorService

  static getInstance(): CollaboratorService {
    if (!this.instance) {
      this.instance = new CollaboratorService()
    }
    return this.instance
  }

  /** Public API */
  async getAll(): Promise<ACollaborator[]> {
    try {
      const req = {
        query: listCollaborators,
        variables: {
          filter: {} as ModelCollaboratorFilterInput
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListCollaboratorsQuery>>(req)
        .catch((err) => {
          LogUtil.errorDetail('CollaboratorService.getAll', err, req)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listCollaborators) {
        LogUtil.errorDetail('CollaboratorService.getAll', response, req, {
          prettyError: true
        })

        throw response
      }

      /** TODO - Apply pagination */

      const items = response.data.listCollaborators.items.filter(
        (item) => !item?._deleted
      )

      return GraphQLUtil.removeDefaultPropsOfList<ACollaborator>(items || [])
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async create(collaborator: CreateCollaboratorInput): Promise<ACollaborator> {
    try {
      const req = {
        query: createCollaborator,
        variables: {
          input: collaborator
        }
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<CreateCollaboratorMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('CollaboratorService.create', err, req)
          return Promise.reject(err)
        })

      if (
        !response ||
        response?.errors ||
        !response?.data?.createCollaborator?.id
      ) {
        LogUtil.errorDetail('CollaboratorService.create', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.createCollaborator
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async update(collaborator: UpdateCollaboratorInput): Promise<ACollaborator> {
    try {
      const req = {
        query: updateCollaborator,
        variables: {
          input: collaborator
        }
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<UpdateCollaboratorMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('CollaboratorService.update', err, req)
          return Promise.reject(err)
        })

      if (
        !response ||
        response?.errors ||
        !response?.data?.updateCollaborator?.id
      ) {
        LogUtil.errorDetail('CollaboratorService.update', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.updateCollaborator
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Public */
  async getContentsByCollaborator(
    collaboratorId: ACollaborator['id']
  ): Promise<Array<ARContentByCollaborator>> {
    try {
      const req = {
        query: listContentsByCollaborator,
        variables: {
          filter: {
            collaboratorId: { eq: collaboratorId }
          } as ModelContentCollaboratorFilterInput
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListContentsByCollaboratorQuery>>(req)
        .catch((err) => {
          LogUtil.errorDetail('getContentsByCollaborator.getContents', err, req)
          return Promise.reject(err)
        })

      if (
        !response ||
        response?.errors ||
        !response?.data?.listContentCollaborators?.items
      ) {
        LogUtil.errorDetail(
          'getContentsByCollaborator.getContents',
          response,
          req,
          {
            prettyError: true
          }
        )

        throw response
      }

      return (
        response.data?.listContentCollaborators?.items
          ?.filter((relationItem) =>
            Boolean(relationItem?.content?.id || !relationItem?._deleted)
          )
          ?.filter(Boolean) || []
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async delete(collaborator: DeleteCollaboratorInput): Promise<ACollaborator> {
    try {
      const req = {
        query: deleteCollaborator,
        variables: {
          input: collaborator
        }
      }

      /**
       * {Action}-{Name}-{Type}
       *  Update Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<DeleteCollaboratorMutation>>(req)
        .catch((err) => {
          LogUtil.errorDetail('CollaboratorService.delete', err, req)
          return Promise.reject(err)
        })

      if (
        !response ||
        response?.errors ||
        !response?.data?.deleteCollaborator?.id
      ) {
        LogUtil.errorDetail('CollaboratorService.delete', response, req, {
          prettyError: true
        })

        throw response
      }

      return response.data.deleteCollaborator
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Private API */
  async deleteContentsRelation(
    contentsCollaboratorR: DeleteContentCollaboratorInput[]
  ): Promise<Array<AContentCollaborator>> {
    try {
      if (!contentsCollaboratorR.length) {
        return []
      }

      const res = await Promise.allSettled(
        contentsCollaboratorR.map((contentCollaboratorR) => {
          const req = {
            query: deleteContentCollaborator,
            variables: {
              input: contentCollaboratorR
            }
          }

          /**
           * {Action}-{Name}-{Type}
           *  Update Content Mutation
           */
          return this.getAPI()
            .graphql<GraphQLQuery<DeleteCollaboratorContentMutation>>(req)
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
            return (
              result.errors?.length ||
              !result.data?.deleteContentCollaborator?.id
            )
          }

          return false
        })
        .map((resp: any) => resp.value)

      if (errors.length) {
        LogUtil.errorDetail(
          'CollaboratorService.deleteContentsByCollaborator',
          errors,
          contentsCollaboratorR
        )

        throw errors
      }

      const result: Array<AContentCollaborator> = []
      res.forEach((resp) => {
        if (resp.status === 'fulfilled') {
          if (resp.value.data?.deleteContentCollaborator?.id) {
            result.push(resp.value.data.deleteContentCollaborator)
          }
        }
      })

      return result
    } catch (error) {
      throw handleError(error)
    }
  }
}

export default CollaboratorService
