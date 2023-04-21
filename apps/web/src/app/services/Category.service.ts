import { handleError, GraphQLUtil } from '@/utils'
import { ACategory, AContent, AFile } from '@/models/ModelsAdapter.model'
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api'
import { withSSRContext, API } from 'aws-amplify'
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

export type GetAllWithContentResult = ACategory & { files: Array<AFile> }

class CategoryService {
  static instance: CategoryService
  private SSR: ReturnType<typeof withSSRContext>

  constructor() {
    this.SSR = withSSRContext()
  }

  static getInstance(): CategoryService {
    if (!this.instance) {
      this.instance = new CategoryService()
    }
    return this.instance
  }

  async create(category: CreateCategoryInput): Promise<Category> {
    try {
      const response = await API.graphql<GraphQLQuery<CreateCategoryMutation>>(
        graphqlOperation(createCategory, {
          input: category
        })
      )

      const newCategory = response?.data?.createCategory

      if (!response || response?.errors?.length || !newCategory?.id) {
        throw response
      }

      return newCategory
    } catch (error) {
      throw handleError(error)
    }
  }

  async update(category: UpdateCategoryInput): Promise<Category> {
    try {
      const response = await API.graphql<GraphQLQuery<UpdateCategoryMutation>>(
        graphqlOperation(updateCategory, {
          input: category
        })
      )

      const resUpdateCategory = response?.data?.updateCategory

      if (!response || response?.errors?.length || !resUpdateCategory?.id) {
        throw response
      }

      return resUpdateCategory
    } catch (error) {
      throw handleError(error)
    }
  }

  async getById(categoryId: string): Promise<ACategory> {
    try {
      /**
       * {Action}-{Name}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<GetCategoryQuery>>(
        graphqlOperation(getCategory, {
          id: categoryId
        })
      )

      if (!response || response?.errors || !response?.data?.getCategory) {
        throw response
      }

      return GraphQLUtil.removeDefaultProps<ACategory>(
        response.data.getCategory
      )
    } catch (error) {
      throw handleError(error)
    }
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

  async getAllWithFiles(): Promise<GetAllWithContentResult[]> {
    try {
      const responseCategories = await this.getAll()

      const response = await Promise.allSettled(
        responseCategories.map(this.getContentByCategory)
      )

      const errors = response.filter((res) => {
        if (res.status === 'rejected') {
          return res.reason
        }
        return false
      })

      if (errors.length > 0) {
        console.error('🚨->', errors)
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

      /**
       * {Action}-{Modules}-{Type}
       *  Update  Content Mutation
       */
      const response = await API.graphql<GraphQLQuery<ListContentsQuery>>(
        graphqlOperation(listFilesByCategoryQuery, filters)
      )

      if (!response || response?.errors || !response?.data?.listContents) {
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
