/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      type
      time
      size
      project {
        name
        description
        __typename
      }
      files {
        data
        type
        mimeType
        caption
        size
        isBanner
        __typename
      }
      date
      location {
        country
        state
        city
        street
        position {
          latitude
          longitude
          __typename
        }
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
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        time
        size
        project {
          name
          description
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
        }
        date
        location {
          country
          state
          city
          street
          position {
            latitude
            longitude
            __typename
          }
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        time
        size
        project {
          name
          description
          __typename
        }
        files {
          data
          type
          mimeType
          caption
          size
          isBanner
          __typename
        }
        date
        location {
          country
          state
          city
          street
          position {
            latitude
            longitude
            __typename
          }
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCollaborator = /* GraphQL */ `
  query GetCollaborator($id: ID!) {
    getCollaborator(id: $id) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCollaborators = /* GraphQL */ `
  query SyncCollaborators(
    $filter: ModelCollaboratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContentTag = /* GraphQL */ `
  query GetContentTag($id: ID!) {
    getContentTag(id: $id) {
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
export const listContentTags = /* GraphQL */ `
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
            __typename
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
            __typename
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
              __typename
            }
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContentTags = /* GraphQL */ `
  query SyncContentTags(
    $filter: ModelContentTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContentTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
                      project {
                        name
                        description
                        __typename
                      }
                      files {
                        data
                        type
                        mimeType
                        caption
                        size
                        isBanner
                        __typename
                      }
                      date
                      location {
                        country
                        state
                        city
                        street
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contentTagsByContentId = /* GraphQL */ `
  query ContentTagsByContentId(
    $contentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentTagsByContentId(
      contentId: $contentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                      project {
                        name
                        description
                        __typename
                      }
                      files {
                        data
                        type
                        mimeType
                        caption
                        size
                        isBanner
                        __typename
                      }
                      date
                      location {
                        country
                        state
                        city
                        street
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contentTagsByTagId = /* GraphQL */ `
  query ContentTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                      project {
                        name
                        description
                        __typename
                      }
                      files {
                        data
                        type
                        mimeType
                        caption
                        size
                        isBanner
                        __typename
                      }
                      date
                      location {
                        country
                        state
                        city
                        street
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getContentCollaborator = /* GraphQL */ `
  query GetContentCollaborator($id: ID!) {
    getContentCollaborator(id: $id) {
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
export const listContentCollaborators = /* GraphQL */ `
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
            __typename
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
            __typename
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
              __typename
            }
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContentCollaborators = /* GraphQL */ `
  query SyncContentCollaborators(
    $filter: ModelContentCollaboratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContentCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
            __typename
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
            __typename
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
              __typename
            }
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contentCollaboratorsByContentId = /* GraphQL */ `
  query ContentCollaboratorsByContentId(
    $contentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentCollaboratorsByContentId(
      contentId: $contentId
      sortDirection: $sortDirection
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
            __typename
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
            __typename
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
              __typename
            }
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const contentCollaboratorsByCollaboratorId = /* GraphQL */ `
  query ContentCollaboratorsByCollaboratorId(
    $collaboratorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentCollaboratorsByCollaboratorId(
      collaboratorId: $collaboratorId
      sortDirection: $sortDirection
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
            __typename
          }
          files {
            data
            type
            mimeType
            caption
            size
            isBanner
            __typename
          }
          date
          location {
            country
            state
            city
            street
            position {
              latitude
              longitude
              __typename
            }
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
                        __typename
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                        __typename
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        __typename
                      }
                      Collaborators {
                        nextToken
                        startedAt
                        __typename
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
                        nextToken
                        startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
