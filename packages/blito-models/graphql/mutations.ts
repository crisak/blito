/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      type
      time
      size
      project {
        name
        description
        __typename
      }
      files {
        data
        type
        mimeType
        caption
        size
        isBanner
        __typename
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
          __typename
        }
        __typename
      }
      colors
      views
      Tags {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Category {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Collaborators {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contentCategoryId
      __typename
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      type
      time
      size
      project {
        name
        description
        __typename
      }
      files {
        data
        type
        mimeType
        caption
        size
        isBanner
        __typename
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
          __typename
        }
        __typename
      }
      colors
      views
      Tags {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Category {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Collaborators {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contentCategoryId
      __typename
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      type
      time
      size
      project {
        name
        description
        __typename
      }
      files {
        data
        type
        mimeType
        caption
        size
        isBanner
        __typename
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
          __typename
        }
        __typename
      }
      colors
      views
      Tags {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Category {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Collaborators {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contentCategoryId
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          tag {
            id
            name
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
        __typename
      }
      fullName
      photoUrl
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
        __typename
      }
      fullName
      photoUrl
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
        __typename
      }
      fullName
      photoUrl
      contents {
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
              __typename
            }
            files {
              data
              type
              mimeType
              caption
              size
              isBanner
              __typename
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
                __typename
              }
              __typename
            }
            colors
            views
            Tags {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                tag {
                  id
                  name
                  contents {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            Collaborators {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
            __typename
          }
          collaborator {
            id
            username
            email
            phone
            socials {
              type
              url
              username
              __typename
            }
            fullName
            photoUrl
            contents {
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
                    __typename
                  }
                  files {
                    data
                    type
                    mimeType
                    caption
                    size
                    isBanner
                    __typename
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
                      __typename
                    }
                    __typename
                  }
                  colors
                  views
                  Tags {
                    items {
                      id
                      contentId
                      tagId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  Collaborators {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
                  __typename
                }
                collaborator {
                  id
                  username
                  email
                  phone
                  socials {
                    type
                    url
                    username
                    __typename
                  }
                  fullName
                  photoUrl
                  contents {
                    items {
                      id
                      contentId
                      collaboratorId
                      content {
                        id
                        type
                        time
                        size
                        date
                        colors
                        views
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        contentCategoryId
                        __typename
                      }
                      collaborator {
                        id
                        username
                        email
                        phone
                        fullName
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    nextToken
                    startedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              nextToken
              startedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createContentTag = /* GraphQL */ `
  mutation CreateContentTag(
    $input: CreateContentTagInput!
    $condition: ModelContentTagConditionInput
  ) {
    createContentTag(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      tag {
        id
        name
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateContentTag = /* GraphQL */ `
  mutation UpdateContentTag(
    $input: UpdateContentTagInput!
    $condition: ModelContentTagConditionInput
  ) {
    updateContentTag(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      tag {
        id
        name
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteContentTag = /* GraphQL */ `
  mutation DeleteContentTag(
    $input: DeleteContentTagInput!
    $condition: ModelContentTagConditionInput
  ) {
    deleteContentTag(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      tag {
        id
        name
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createContentCollaborator = /* GraphQL */ `
  mutation CreateContentCollaborator(
    $input: CreateContentCollaboratorInput!
    $condition: ModelContentCollaboratorConditionInput
  ) {
    createContentCollaborator(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      collaborator {
        id
        username
        email
        phone
        socials {
          type
          url
          username
          __typename
        }
        fullName
        photoUrl
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateContentCollaborator = /* GraphQL */ `
  mutation UpdateContentCollaborator(
    $input: UpdateContentCollaboratorInput!
    $condition: ModelContentCollaboratorConditionInput
  ) {
    updateContentCollaborator(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      collaborator {
        id
        username
        email
        phone
        socials {
          type
          url
          username
          __typename
        }
        fullName
        photoUrl
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteContentCollaborator = /* GraphQL */ `
  mutation DeleteContentCollaborator(
    $input: DeleteContentCollaboratorInput!
    $condition: ModelContentCollaboratorConditionInput
  ) {
    deleteContentCollaborator(input: $input, condition: $condition) {
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
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
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
            __typename
          }
          __typename
        }
        colors
        views
        Tags {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            tag {
              id
              name
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Collaborators {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
        __typename
      }
      collaborator {
        id
        username
        email
        phone
        socials {
          type
          url
          username
          __typename
        }
        fullName
        photoUrl
        contents {
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
                __typename
              }
              files {
                data
                type
                mimeType
                caption
                size
                isBanner
                __typename
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
                  __typename
                }
                __typename
              }
              colors
              views
              Tags {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  tag {
                    id
                    name
                    contents {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                __typename
              }
              Collaborators {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
              __typename
            }
            collaborator {
              id
              username
              email
              phone
              socials {
                type
                url
                username
                __typename
              }
              fullName
              photoUrl
              contents {
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
                      __typename
                    }
                    files {
                      data
                      type
                      mimeType
                      caption
                      size
                      isBanner
                      __typename
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
                        __typename
                      }
                      __typename
                    }
                    colors
                    views
                    Tags {
                      items {
                        id
                        contentId
                        tagId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      __typename
                    }
                    Collaborators {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
                    __typename
                  }
                  collaborator {
                    id
                    username
                    email
                    phone
                    socials {
                      type
                      url
                      username
                      __typename
                    }
                    fullName
                    photoUrl
                    contents {
                      items {
                        id
                        contentId
                        collaboratorId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      nextToken
                      startedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  __typename
                }
                nextToken
                startedAt
                __typename
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              __typename
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
