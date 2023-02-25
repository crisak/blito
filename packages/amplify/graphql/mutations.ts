/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
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
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
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
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
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
export const createCollaborator = /* GraphQL */ `
  mutation CreateCollaborator(
    $input: CreateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    createCollaborator(input: $input, condition: $condition) {
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
export const updateCollaborator = /* GraphQL */ `
  mutation UpdateCollaborator(
    $input: UpdateCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    updateCollaborator(input: $input, condition: $condition) {
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
export const deleteCollaborator = /* GraphQL */ `
  mutation DeleteCollaborator(
    $input: DeleteCollaboratorInput!
    $condition: ModelCollaboratorConditionInput
  ) {
    deleteCollaborator(input: $input, condition: $condition) {
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
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      date
      banner
      description
      location {
        latitude
        longitude
      }
      userID
      category {
        id
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      date
      banner
      description
      location {
        latitude
        longitude
      }
      userID
      category {
        id
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      date
      banner
      description
      location {
        latitude
        longitude
      }
      userID
      category {
        id
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
export const createProjectTags = /* GraphQL */ `
  mutation CreateProjectTags(
    $input: CreateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    createProjectTags(input: $input, condition: $condition) {
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
export const updateProjectTags = /* GraphQL */ `
  mutation UpdateProjectTags(
    $input: UpdateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    updateProjectTags(input: $input, condition: $condition) {
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
export const deleteProjectTags = /* GraphQL */ `
  mutation DeleteProjectTags(
    $input: DeleteProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    deleteProjectTags(input: $input, condition: $condition) {
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
export const createProjectCollaborator = /* GraphQL */ `
  mutation CreateProjectCollaborator(
    $input: CreateProjectCollaboratorInput!
    $condition: ModelProjectCollaboratorConditionInput
  ) {
    createProjectCollaborator(input: $input, condition: $condition) {
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
export const updateProjectCollaborator = /* GraphQL */ `
  mutation UpdateProjectCollaborator(
    $input: UpdateProjectCollaboratorInput!
    $condition: ModelProjectCollaboratorConditionInput
  ) {
    updateProjectCollaborator(input: $input, condition: $condition) {
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
export const deleteProjectCollaborator = /* GraphQL */ `
  mutation DeleteProjectCollaborator(
    $input: DeleteProjectCollaboratorInput!
    $condition: ModelProjectCollaboratorConditionInput
  ) {
    deleteProjectCollaborator(input: $input, condition: $condition) {
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
