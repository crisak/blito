export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
      }
      nextToken
      startedAt
    }
  }
`

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
    }
  }
`

export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
    }
  }
`
export const getContentsByTag = /* GraphQL */ `
  query GetContentsByTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      contents {
        items {
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
            contentCategoryId
            createdAt
            updatedAt
            _version
            _deleted
          }
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`

export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`
