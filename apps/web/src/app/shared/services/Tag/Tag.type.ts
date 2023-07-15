import { ATag } from '@/models'
/** Q = Query  */

type QTag = ATag & { _deleted?: boolean | null }

export type ListTagsQuery = {
  listTags?: {
    // __typename: 'ModelTagConnection'
    items: Array<QTag | null>
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
