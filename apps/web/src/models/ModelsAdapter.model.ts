import type {
  Content,
  Category as CategoryModel,
  File as FileModel,
  Tag,
  Collaborator,
  SocialNetwork
} from 'blito-models'

export type DefaultPropsGraphQL = {
  __typename: string
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

export type ATag = Omit<RmDefaultParameter<Tag>, 'contents'>

export type ATagRelation = RmDefaultParameter<Tag>

export type ACollaborator = Omit<
  RmDefaultParameter<Collaborator>,
  'contents' | 'socials'
> & {
  socials?: Array<ASocialNetwork>
}

export type ASocialNetwork = RmDefaultParameter<SocialNetwork>

export type ACollaboratorRelation = RmDefaultParameter<Collaborator>
