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
export const listContentsByTag = /* GraphQL */ `
  query ListContentTags(
    $filter: ModelContentTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contentId
        tagId
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

export const deleteContentTag = /* GraphQL */ `
  mutation DeleteContentTag(
    $input: DeleteContentTagInput!
    $condition: ModelContentTagConditionInput
  ) {
    deleteContentTag(input: $input, condition: $condition) {
      id
      contentId
      tagId
      createdAt
      updatedAt
      _version
      _deleted
    }
  }
`
