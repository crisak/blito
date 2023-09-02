export const listCollaborators = /* GraphQL */ `
  query ListCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollaborators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone
        socials {
          type
          url
          username
        }
        fullName
        photoUrl
        createdAt
        updatedAt
        _version
        _deleted
      }
    }
  }
`

export const createCollaborator = /* GraphQL */ `
  mutation CreateCollaborator(
    $input: CreateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    createCollaborator(input: $input, condition: $condition) {
      id
      username
      email
      phone
      socials {
        type
        url
        username
      }
      fullName
      photoUrl
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`

export const updateCollaborator = /* GraphQL */ `
  mutation UpdateCollaborator(
    $input: UpdateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    updateCollaborator(input: $input, condition: $condition) {
      id
      username
      email
      phone
      socials {
        type
        url
        username
      }
      fullName
      photoUrl
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`

export const listContentsByCollaborator = /* GraphQL */ `
  query ListContentCollaborators(
    $filter: ModelContentCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contentId
        collaboratorId
        content {
          id
          type
          time
          size
          project {
            name
            description
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
            }
          }
          colors
          views
          createdAt
          updatedAt
          _version
          _deleted
          contentCategoryId
        }
        createdAt
        updatedAt
        _version
        _deleted
      }
    }
  }
`

export const deleteCollaborator = /* GraphQL */ `
  mutation DeleteCollaborator(
    $input: DeleteCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    deleteCollaborator(input: $input, condition: $condition) {
      id
      username
      email
      phone
      socials {
        type
        url
        username
      }
      fullName
      photoUrl
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`

export const deleteContentCollaborator = /* GraphQL */ `
  mutation DeleteContentCollaborator(
    $input: DeleteContentCollaboratorInput!
    $condition: ModelContentCollaboratorConditionInput
  ) {
    deleteContentCollaborator(input: $input, condition: $condition) {
      id
      contentId
      collaboratorId
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`
