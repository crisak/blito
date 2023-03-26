import type {
  Content,
  Category as CategoryModel,
  File as FileModel
} from 'blito-models'

export type DefaultPropsGraphQL = {
  __typename: string
  createdAt: string
  updatedAt: string
  _version: number
  _deleted?: boolean | null
  _lastChangedAt: number
}

export type RmDefaultParameter<T> = Omit<T, keyof DefaultPropsGraphQL>

/**
 * Dictionary names
 * {A}{ModelName} = Name type or model
 * A = Prefix of adapter
 * ModelName = Name original of model
 *
 * Example
 * Content = Name Original
 * AContent = Name Adapter
 *
 */

export type AContent = RmDefaultParameter<Content>

export type ACategory = RmDefaultParameter<CategoryModel>

export type AFile = RmDefaultParameter<FileModel>
