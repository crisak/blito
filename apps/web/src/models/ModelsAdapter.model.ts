import type {
  Category as CategoryModel,
  Collaborator,
  Content,
  ContentCollaborator,
  ContentProject,
  ContentTag,
  File as FileModel,
  Location as LocationModel,
  Position,
  SocialNetwork,
  Tag
} from 'blito-models'

export type DefaultPropsGraphQL = {
  __typename: string
  _lastChangedAt: number
}

export type RmDefaultParameter<T> = Omit<T, keyof DefaultPropsGraphQL>

/**
 *
 * * Dictionary names
 * A = Adapter
 * R = Relation
 * * Detail
 * {A}{ModelName} = Name type or model
 * A = Prefix of adapter
 * ModelName = Name original of model
 *
 * * Example
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
  /** Remove "__typename" property */
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

export type AContentTag = Omit<
  RmDefaultParameter<ContentTag>,
  'tag' | 'content'
>

export type ARContentTag = Omit<
  RmDefaultParameter<ContentTag>,
  'tag' | 'content'
> & {
  content: AContent
  tag: ATag
}

export type ARContentByTag = Omit<
  RmDefaultParameter<ContentTag>,
  'tag' | 'content'
> & {
  content: AContent
}

export type ARTagByContent = Omit<
  RmDefaultParameter<ContentTag>,
  'tag' | 'content'
> & {
  tag: ATag
}

export type ATagRelation = RmDefaultParameter<Tag>

export type ACollaborator = Omit<
  RmDefaultParameter<Collaborator>,
  'contents' | 'socials'
> & {
  socials?: Array<ASocialNetwork>
}

export type AContentCollaborator = Omit<
  RmDefaultParameter<ContentCollaborator>,
  'collaborator' | 'content'
>

export type ARContentByCollaborator = Omit<
  RmDefaultParameter<ContentCollaborator>,
  'collaborator' | 'content'
> & {
  content: AContent
}

export type ASocialNetwork = RmDefaultParameter<SocialNetwork>

export type ACollaboratorRelation = RmDefaultParameter<Collaborator>
