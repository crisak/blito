import type {
  Content,
  Category as CategoryModel,
  File as FileModel,
  Tag,
  Collaborator,
  SocialNetwork,
  ContentProject,
  Location as LocationModel,
  Position
} from 'blito-models'

export type DefaultPropsGraphQL = {
  __typename: string
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
/** TODO - Change implementation, take custom query  */
export type AFullContent = RmDefaultParameter<Content>

export type AContent = Omit<
  AClearRelationContent,
  'project' | 'files' | 'location'
> & {
  project?: AContentProject | null
  files: Array<AFile | null>
  location?: ALocation | null
}

type AClearRelationContent = Omit<
  RmDefaultParameter<Content>,
  'Tags' | 'Category' | 'Collaborators'
>

type AContentProject = RmDefaultParameter<ContentProject>

type ALocation = Omit<RmDefaultParameter<LocationModel>, 'position'> & {
  position: APosition
}

type APosition = RmDefaultParameter<Position>

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
