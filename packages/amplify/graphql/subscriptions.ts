/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
    onCreateTags(filter: $filter) {
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
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
    onUpdateTags(filter: $filter) {
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
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
    onDeleteTags(filter: $filter) {
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
export const onCreateCollaborator = /* GraphQL */ `
  subscription OnCreateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onCreateCollaborator(filter: $filter) {
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
export const onUpdateCollaborator = /* GraphQL */ `
  subscription OnUpdateCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onUpdateCollaborator(filter: $filter) {
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
export const onDeleteCollaborator = /* GraphQL */ `
  subscription OnDeleteCollaborator(
    $filter: ModelSubscriptionCollaboratorFilterInput
  ) {
    onDeleteCollaborator(filter: $filter) {
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
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateProjectTags = /* GraphQL */ `
  subscription OnCreateProjectTags(
    $filter: ModelSubscriptionProjectTagsFilterInput
  ) {
    onCreateProjectTags(filter: $filter) {
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
export const onUpdateProjectTags = /* GraphQL */ `
  subscription OnUpdateProjectTags(
    $filter: ModelSubscriptionProjectTagsFilterInput
  ) {
    onUpdateProjectTags(filter: $filter) {
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
export const onDeleteProjectTags = /* GraphQL */ `
  subscription OnDeleteProjectTags(
    $filter: ModelSubscriptionProjectTagsFilterInput
  ) {
    onDeleteProjectTags(filter: $filter) {
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
export const onCreateProjectCollaborator = /* GraphQL */ `
  subscription OnCreateProjectCollaborator(
    $filter: ModelSubscriptionProjectCollaboratorFilterInput
  ) {
    onCreateProjectCollaborator(filter: $filter) {
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
export const onUpdateProjectCollaborator = /* GraphQL */ `
  subscription OnUpdateProjectCollaborator(
    $filter: ModelSubscriptionProjectCollaboratorFilterInput
  ) {
    onUpdateProjectCollaborator(filter: $filter) {
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
export const onDeleteProjectCollaborator = /* GraphQL */ `
  subscription OnDeleteProjectCollaborator(
    $filter: ModelSubscriptionProjectCollaboratorFilterInput
  ) {
    onDeleteProjectCollaborator(filter: $filter) {
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
