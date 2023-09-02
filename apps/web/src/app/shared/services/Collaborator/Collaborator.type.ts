import {
  ACollaborator,
  AContentCollaborator,
  ARContentByCollaborator
} from '@/models'

/**
 * Q = Query
 */

export type ListCollaboratorsQuery = {
  listCollaborators?: {
    items: Array<ACollaborator | null>
  } | null
}

export type CreateCollaboratorMutation = {
  createCollaborator?: ACollaborator | null
}

export type UpdateCollaboratorMutation = {
  updateCollaborator?: ACollaborator | null
}

export type ListContentsByCollaboratorQuery = {
  listContentCollaborators?: {
    items: Array<ARContentByCollaborator | null>
  } | null
}

export type DeleteCollaboratorMutation = {
  deleteCollaborator?: ACollaborator | null
}

export type DeleteCollaboratorContentMutation = {
  deleteContentCollaborator?: AContentCollaborator | null
}
