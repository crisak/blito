/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateCollaborator = /* GraphQL */ `
  subscription OnCreateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onCreateCollaborator(filter: $filter) {
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
export const onUpdateCollaborator = /* GraphQL */ `
  subscription OnUpdateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onUpdateCollaborator(filter: $filter) {
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
export const onDeleteCollaborator = /* GraphQL */ `
  subscription OnDeleteCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onDeleteCollaborator(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateContentTag = /* GraphQL */ `
  subscription OnCreateContentTag(
    $filter: ModelSubscriptionContentTagFilterInput
  ) {
    onCreateContentTag(filter: $filter) {
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
export const onUpdateContentTag = /* GraphQL */ `
  subscription OnUpdateContentTag(
    $filter: ModelSubscriptionContentTagFilterInput
  ) {
    onUpdateContentTag(filter: $filter) {
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
export const onDeleteContentTag = /* GraphQL */ `
  subscription OnDeleteContentTag(
    $filter: ModelSubscriptionContentTagFilterInput
  ) {
    onDeleteContentTag(filter: $filter) {
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
export const onCreateContentCollaborator = /* GraphQL */ `
  subscription OnCreateContentCollaborator(
    $filter: ModelSubscriptionContentCollaboratorFilterInput
  ) {
    onCreateContentCollaborator(filter: $filter) {
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
export const onUpdateContentCollaborator = /* GraphQL */ `
  subscription OnUpdateContentCollaborator(
    $filter: ModelSubscriptionContentCollaboratorFilterInput
  ) {
    onUpdateContentCollaborator(filter: $filter) {
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
export const onDeleteContentCollaborator = /* GraphQL */ `
  subscription OnDeleteContentCollaborator(
    $filter: ModelSubscriptionContentCollaboratorFilterInput
  ) {
    onDeleteContentCollaborator(filter: $filter) {
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
