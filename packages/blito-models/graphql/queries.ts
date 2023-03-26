/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnalytics = /* GraphQL */ `
  query GetAnalytics($filter: ModelAnalyticsFilterInput) {
    getAnalytics(filter: $filter) {
      url
      status
    }
  }
`;
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Category {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
      }
      nextToken
      startedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
      }
      nextToken
      startedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            contentCategoryId
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
                      }
                      tag {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  Category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  contentCategoryId
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
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              Category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    Category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    contentCategoryId
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
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
                    }
                    tag {
                      id
                      name
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                Category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                contentCategoryId
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
                      }
                      colors
                      views
                      Tags {
                        nextToken
                        startedAt
                      }
                      Category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      Collaborators {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      contentCategoryId
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
                      }
                      fullName
                      photoUrl
                      contents {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
