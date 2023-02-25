/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      name
      projects {
        items {
          id
          tagsId
          projectId
          tags {
            id
            name
            projects {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
          project {
            id
            name
            date
            banner
            description
            location {
              latitude
              longitude
            }
            userID
            category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            collaborators {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            tags {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            projectCategoryId
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
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
    $filter: ModelTagsFilterInput
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
        projects {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
      fullName
      username
      email
      socials {
        type
        url
        username
      }
      photoUrl
      projects {
        items {
          id
          collaboratorId
          projectId
          collaborator {
            id
            fullName
            username
            email
            socials {
              type
              url
              username
            }
            photoUrl
            projects {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
          project {
            id
            name
            date
            banner
            description
            location {
              latitude
              longitude
            }
            userID
            category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            collaborators {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            tags {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            projectCategoryId
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
        fullName
        username
        email
        socials {
          type
          url
          username
        }
        photoUrl
        projects {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        fullName
        username
        email
        socials {
          type
          url
          username
        }
        photoUrl
        projects {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      date
      banner
      description
      location {
        latitude
        longitude
      }
      userID
      category {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      collaborators {
        items {
          id
          collaboratorId
          projectId
          collaborator {
            id
            fullName
            username
            email
            socials {
              type
              url
              username
            }
            photoUrl
            projects {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
          project {
            id
            name
            date
            banner
            description
            location {
              latitude
              longitude
            }
            userID
            category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            collaborators {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            tags {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            projectCategoryId
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
      tags {
        items {
          id
          tagsId
          projectId
          tags {
            id
            name
            projects {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
          project {
            id
            name
            date
            banner
            description
            location {
              latitude
              longitude
            }
            userID
            category {
              id
              name
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            collaborators {
              items {
                id
                collaboratorId
                projectId
                collaborator {
                  id
                  fullName
                  username
                  email
                  socials {
                    type
                    url
                    username
                  }
                  photoUrl
                  projects {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            tags {
              items {
                id
                tagsId
                projectId
                tags {
                  id
                  name
                  projects {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                project {
                  id
                  name
                  date
                  banner
                  description
                  location {
                    latitude
                    longitude
                  }
                  userID
                  category {
                    id
                    name
                    description
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  collaborators {
                    items {
                      id
                      collaboratorId
                      projectId
                      collaborator {
                        id
                        fullName
                        username
                        email
                        photoUrl
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  tags {
                    items {
                      id
                      tagsId
                      projectId
                      tags {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      project {
                        id
                        name
                        date
                        banner
                        description
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        projectCategoryId
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
                  projectCategoryId
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
            projectCategoryId
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
      projectCategoryId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        banner
        description
        location {
          latitude
          longitude
        }
        userID
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        collaborators {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        tags {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        projectCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        date
        banner
        description
        location {
          latitude
          longitude
        }
        userID
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        collaborators {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        tags {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        projectCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProjectTags = /* GraphQL */ `
  query GetProjectTags($id: ID!) {
    getProjectTags(id: $id) {
      id
      tagsId
      projectId
      tags {
        id
        name
        projects {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
      project {
        id
        name
        date
        banner
        description
        location {
          latitude
          longitude
        }
        userID
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        collaborators {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        tags {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        projectCategoryId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProjectTags = /* GraphQL */ `
  query ListProjectTags(
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagsId
        projectId
        tags {
          id
          name
          projects {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const syncProjectTags = /* GraphQL */ `
  query SyncProjectTags(
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagsId
        projectId
        tags {
          id
          name
          projects {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const projectTagsByTagsId = /* GraphQL */ `
  query ProjectTagsByTagsId(
    $tagsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTagsByTagsId(
      tagsId: $tagsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagsId
        projectId
        tags {
          id
          name
          projects {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const projectTagsByProjectId = /* GraphQL */ `
  query ProjectTagsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTagsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagsId
        projectId
        tags {
          id
          name
          projects {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const getProjectCollaborator = /* GraphQL */ `
  query GetProjectCollaborator($id: ID!) {
    getProjectCollaborator(id: $id) {
      id
      collaboratorId
      projectId
      collaborator {
        id
        fullName
        username
        email
        socials {
          type
          url
          username
        }
        photoUrl
        projects {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
      project {
        id
        name
        date
        banner
        description
        location {
          latitude
          longitude
        }
        userID
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        collaborators {
          items {
            id
            collaboratorId
            projectId
            collaborator {
              id
              fullName
              username
              email
              socials {
                type
                url
                username
              }
              photoUrl
              projects {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        tags {
          items {
            id
            tagsId
            projectId
            tags {
              id
              name
              projects {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
            project {
              id
              name
              date
              banner
              description
              location {
                latitude
                longitude
              }
              userID
              category {
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              collaborators {
                items {
                  id
                  collaboratorId
                  projectId
                  collaborator {
                    id
                    fullName
                    username
                    email
                    socials {
                      type
                      url
                      username
                    }
                    photoUrl
                    projects {
                      items {
                        id
                        collaboratorId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              tags {
                items {
                  id
                  tagsId
                  projectId
                  tags {
                    id
                    name
                    projects {
                      items {
                        id
                        tagsId
                        projectId
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
                  project {
                    id
                    name
                    date
                    banner
                    description
                    location {
                      latitude
                      longitude
                    }
                    userID
                    category {
                      id
                      name
                      description
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    collaborators {
                      items {
                        id
                        collaboratorId
                        projectId
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    tags {
                      items {
                        id
                        tagsId
                        projectId
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
                    projectCategoryId
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
              projectCategoryId
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
        projectCategoryId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProjectCollaborators = /* GraphQL */ `
  query ListProjectCollaborators(
    $filter: ModelProjectCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collaboratorId
        projectId
        collaborator {
          id
          fullName
          username
          email
          socials {
            type
            url
            username
          }
          photoUrl
          projects {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const syncProjectCollaborators = /* GraphQL */ `
  query SyncProjectCollaborators(
    $filter: ModelProjectCollaboratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectCollaborators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        collaboratorId
        projectId
        collaborator {
          id
          fullName
          username
          email
          socials {
            type
            url
            username
          }
          photoUrl
          projects {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const projectCollaboratorsByCollaboratorId = /* GraphQL */ `
  query ProjectCollaboratorsByCollaboratorId(
    $collaboratorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectCollaboratorsByCollaboratorId(
      collaboratorId: $collaboratorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collaboratorId
        projectId
        collaborator {
          id
          fullName
          username
          email
          socials {
            type
            url
            username
          }
          photoUrl
          projects {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
export const projectCollaboratorsByProjectId = /* GraphQL */ `
  query ProjectCollaboratorsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectCollaboratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectCollaboratorsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collaboratorId
        projectId
        collaborator {
          id
          fullName
          username
          email
          socials {
            type
            url
            username
          }
          photoUrl
          projects {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
        project {
          id
          name
          date
          banner
          description
          location {
            latitude
            longitude
          }
          userID
          category {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          collaborators {
            items {
              id
              collaboratorId
              projectId
              collaborator {
                id
                fullName
                username
                email
                socials {
                  type
                  url
                  username
                }
                photoUrl
                projects {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          tags {
            items {
              id
              tagsId
              projectId
              tags {
                id
                name
                projects {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
              project {
                id
                name
                date
                banner
                description
                location {
                  latitude
                  longitude
                }
                userID
                category {
                  id
                  name
                  description
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                collaborators {
                  items {
                    id
                    collaboratorId
                    projectId
                    collaborator {
                      id
                      fullName
                      username
                      email
                      socials {
                        type
                        url
                        username
                      }
                      photoUrl
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                tags {
                  items {
                    id
                    tagsId
                    projectId
                    tags {
                      id
                      name
                      projects {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    project {
                      id
                      name
                      date
                      banner
                      description
                      location {
                        latitude
                        longitude
                      }
                      userID
                      category {
                        id
                        name
                        description
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      collaborators {
                        nextToken
                        startedAt
                      }
                      tags {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      projectCategoryId
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
                projectCategoryId
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
          projectCategoryId
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
