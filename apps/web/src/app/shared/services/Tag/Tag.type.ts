import { AContentTag, ARContentByTag, ATag } from '@/models'

/**
 * Q = Query
 */

export type ListTagsQuery = {
  listTags?: {
    items: Array<ATag | null>
    nextToken?: string | null
    startedAt?: number | null
  } | null
}

export type CreateTagMutation = {
  createTag?: ATag | null
}

export type UpdateTagMutation = {
  updateTag?: ATag | null
}

export type ListContentsByTagQuery = {
  listContentTags?: {
    __typename: 'ModelContentTagConnection'
    items: Array<ARContentByTag | null>
  } | null
}

export type DeleteTagMutation = {
  deleteTag?: ATag | null
}

export type DeleteTagContentMutation = {
  deleteContentTag?: AContentTag | null
}
