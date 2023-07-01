import { handleError, GraphQLUtil, LogUtil } from '@/utils'
import { ACategory, AContent, AFile } from '@/models/ModelsAdapter.model'
import {
  graphqlOperation,
  GraphQLQuery,
  GRAPHQL_AUTH_MODE
} from '@aws-amplify/api'
import {
  TypeFile,
  ListCategoriesQuery,
  listCategories,
  ListContentsQuery,
  GetCategoryQuery,
  getCategory,
  createCategory,
  CreateCategoryMutation,
  Category,
  CreateCategoryInput,
  updateCategory,
  UpdateCategoryMutation,
  UpdateCategoryInput
} from 'blito-models'
import GraphQLService from './GraphQL.Service'

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }

class CategoryService extends GraphQLService {
  static instance: CategoryService

  static getInstance(): CategoryService {
    if (!this.instance) {
      this.instance = new CategoryService()
    }
    return this.instance
  }

  async create(category: CreateCategoryInput): Promise<Category> {
    try {
      /** Request with auth of Cognito */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<CreateCategoryMutation>>(
          graphqlOperation(createCategory, {
            input: category
          })
        )
        .catch((err) => {
          LogUtil.errorDetail(
            'CategoryService.create',
            err,
            createCategory,
            '🔎 Input:',
            {
              input: category
            }
          )
          return Promise.reject(err)
        })

      const newCategory = response?.data?.createCategory

      if (!response || response?.errors?.length || !newCategory?.id) {
        LogUtil.errorDetail(
          'CategoryService.create',
          response,
          createCategory,
          '🔎 Input:',
          {
            input: category
          },
          { prettyError: true }
        )

        throw response
      }

      return newCategory
    } catch (error) {
      throw handleError(error)
    }
  }

  async update(category: UpdateCategoryInput): Promise<Category> {
    try {
      /** Request with auth of Cognito */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<UpdateCategoryMutation>>(
          graphqlOperation(updateCategory, {
            input: category
          })
        )
        .catch((err) => {
          LogUtil.errorDetail(
            'CategoryService.update',
            err,
            updateCategory,
            '🔎 Input:',
            {
              input: category
            }
          )
          return Promise.reject(err)
        })

      const resUpdateCategory = response?.data?.updateCategory

      if (!response || response?.errors?.length || !resUpdateCategory?.id) {
        LogUtil.errorDetail(
          'CategoryService.update',
          response,
          updateCategory,
          '🔎 Input:',
          {
            input: category
          },
          {
            prettyError: true
          }
        )
        throw response
      }

      return resUpdateCategory
    } catch (error) {
      throw handleError(error)
    }
  }

  async getById(categoryId: string): Promise<ACategory> {
    try {
      const payload = {
        query: getCategory,
        variables: {
          id: categoryId
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      }
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<GetCategoryQuery>>(payload)
        .catch((err) => {
          LogUtil.errorDetail('CategoryService.getById', err, payload)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.getCategory) {
        LogUtil.errorDetail('CategoryService.getById', response, payload, {
          prettyError: true
        })
        throw response
      }

      return GraphQLUtil.removeDefaultProps<ACategory>(
        response.data.getCategory
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Public API */
  async getAll(): Promise<ACategory[]> {
    try {
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListCategoriesQuery>>({
          query: listCategories,
          authMode: GRAPHQL_AUTH_MODE.API_KEY
        })
        .catch((err) => {
          LogUtil.errorDetail('CategoryService.getAll', err, listCategories)
          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listCategories) {
        LogUtil.errorDetail(
          'CategoryService.getAll',
          response,
          listCategories,
          {
            prettyError: true
          }
        )

        throw response
      }

      return GraphQLUtil.removeDefaultPropsOfList<ACategory>(
        response.data.listCategories.items
      )
    } catch (error) {
      throw handleError(error)
    }
  }

  async getAllWithFiles(): Promise<GetAllWithContentResult[]> {
    try {
      const responseCategories = await this.getAll()

      const response = await Promise.allSettled(
        responseCategories.map(this.getContentByCategory.bind(this))
      )

      const errors = response.filter((res) => {
        if (res.status === 'rejected') {
          return res.reason
        }
        return false
      })

      if (errors.length > 0) {
        throw errors
      }

      return response
        .map<GetAllWithContentResult | null>((response) => {
          if (response?.status === 'fulfilled') {
            return response.value
          }
          return null
        })
        .filter((data) => Boolean(data)) as GetAllWithContentResult[]
    } catch (error) {
      throw handleError(error)
    }
  }

  /** Public */
  private async getContentByCategory(
    category: ACategory
  ): Promise<GetAllWithContentResult> {
    try {
      const listFilesByCategoryQuery = /* GraphQL */ `
        query LoadImagesByCategory($categoryId: ID!) {
          listContents(
            filter: {
              and: [{ type: { ne: ALBUM } }, { type: { ne: GALLERY } }]
              contentCategoryId: { eq: $categoryId }
            }
          ) {
            items {
              files {
                mimeType
                type
                data
                isBanner
                caption
              }
            }
          }
        }
      `

      const filters = {
        categoryId: category.id
      }

      const payloadReq = {
        query: listFilesByCategoryQuery,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
        variables: filters
      }

      /**
       * {Action}-{Modules}-{Type}
       *  Update  Content Mutation
       */
      const response = await this.getAPI()
        .graphql<GraphQLQuery<ListContentsQuery>>(payloadReq)
        .catch((err) => {
          LogUtil.errorDetail(
            'CategoryService.getContentByCategory',
            err,
            payloadReq
          )

          return Promise.reject(err)
        })

      if (!response || response?.errors || !response?.data?.listContents) {
        LogUtil.errorDetail(
          'CategoryService.getContentByCategory',
          response,
          payloadReq,
          { prettyError: true }
        )
        throw response
      }

      const contest = GraphQLUtil.removeDefaultPropsOfList<AContent>(
        response.data.listContents.items
      )

      let files = contest.slice(0, 3).map<AFile>((content) => {
        const bannerImage = content?.files?.find(
          (file) => file?.isBanner
        ) as AFile

        if (!bannerImage) {
          return GraphQLUtil.removeDefaultProps<AFile>(content?.files[0])
        }

        return GraphQLUtil.removeDefaultProps<AFile>(bannerImage)
      })

      if (files.length === 0) {
        files = [
          {
            isBanner: true,
            data: 'https://cdn-icons-png.flaticon.com/512/3342/3342137.png',
            type: TypeFile.IMAGE,
            mimeType: 'image/png',
            caption: 'Imagen por defecto',
            size: 1400
          } as AFile
        ]
      }

      return {
        ...category,
        files
      } as GetAllWithContentResult
    } catch (error) {
      throw handleError(error)
    }
  }
}

export default CategoryService
