import { AContent, ATag } from '@/models'

/** Q = Query  */

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

export type GetContentsByTagQuery = {
  getTag?:
    | (ATag & {
        contents?: {
          items: Array<{
            content: AContent
          } | null>
        } | null
      })
    | null
}

export type DeleteTagMutation = {
  deleteTag?: ATag | null
}
