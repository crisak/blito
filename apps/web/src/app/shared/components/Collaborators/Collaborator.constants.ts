const heightListTitle = 36
const heightSpaceTitleTable = 20.333 + 1
const heightListFilter = 90

export const HEIGHT_FILTER_LIST =
  heightListTitle + heightSpaceTitleTable + heightListFilter /** PX */

export type MetadataScreens = {
  containerListCss?: string
}

export const SCREENS = {
  listCollaborators: 'COLLABORATOR_LIST',
  formCollaborators: 'COLLABORATOR_FORM'
}
