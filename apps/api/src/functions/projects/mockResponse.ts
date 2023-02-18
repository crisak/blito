import { Project, Content } from '../../models'
import { v4 as uuidv4 } from 'uuid'
import { CategoriesSummaryContentsDto } from './dtos'

const CATEGORY_ID = 'idCategoryTmp'
const CONTENT_ID = 'idContentTmp'

const getCategories = [
  {
    id: uuidv4(),
    name: 'Category 1',
    description: 'Category 1 description'
  },
  {
    id: CATEGORY_ID,
    name: 'Category 1',
    description: 'Category 1 description'
  },
  {
    id: uuidv4(),
    name: 'Category 3',
    description: 'Category 3 description'
  }
]

export const getProjects: Project[] = [
  {
    id: '51a92d66-59e5-4a2b-aab2-8b902b4ccce1',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 0',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '6baffaa7-c1eb-4a70-baf7-396c45b859dd',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 1',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    tags: 'graffiti,bodypaint,muralismo,calle',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 4.589530538674052, longitude: -74.19843928271003 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '3d8e6e45-b94e-4b57-baf2-79a520ee2f9a',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 2',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '5510c1e7-8587-451c-a881-00841696db7c',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 3',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '10f0396c-401f-467e-83e9-2bd32fcf275f',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 4',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '9b7c6cd3-71d6-455f-90bf-0d13b55e5157',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 5',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'd338460d-c9ac-432f-985d-c327b3e4c4e7',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 6',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'a346ee5b-24f8-458c-9195-d0fe5bab682f',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 7',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '975a0db3-7737-4000-924a-1a209f42b2ff',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 8',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '7b860717-cfe4-4b98-95f3-f9d2584011c2',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 9',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'a9b8a979-d8b7-4c34-a557-f15e0c450f2e',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 10',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'd0c2ea22-2f45-4cbf-8de8-ebc2471776d4',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 11',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'c179a35a-9566-4568-94f2-804b02ab3635',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 12',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '450d5411-afb1-4f51-a7e6-368d84a3957e',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 13',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '005224a1-0eea-4dd1-baf2-ad34e7eb8087',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 14',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'a2693b0d-fed7-4fc1-b2ac-a26d5b8d17e8',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 15',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: '2cc00a16-b017-4072-8e31-49cf4bffda1e',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 16',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'a2c87bfd-c1f3-4bdb-82c8-f0bf487fb3af',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 17',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'be154685-8e0b-45a1-81d2-1bb76cdc48b1',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 18',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  },
  {
    id: 'e2d3e8f0-4eca-4cd7-9517-28af2dbf5aa8',
    userID: 'crisak-4a2b-aab2-8b902b4ccce1',
    name: 'Test name 19',
    date: '2022-08-25T10:41:09.826Z',
    banner: 'https://tinyurl.com/58je9me7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryID: CATEGORY_ID,
    location: {
      position: { latitude: 43523426, longitude: -12312.31231 },
      address: 'Calle 23 sut test conjunto test',
      country: 'COP',
      state: 'Bogota'
    }
  }
]

const getContents: Content[] = [
  {
    id: CONTENT_ID,
    url: 'https://picsum.photos/200',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  },
  {
    id: 'fsjfljlasdf',
    url: 'https://picsum.photos/210',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  },
  {
    id: 'asflkjl3234',
    url: 'https://picsum.photos/205',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  },
  {
    id: 'sdfjlajsdlf',
    url: 'https://picsum.photos/209',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  },
  {
    id: 'fsjfljlasdf',
    url: 'https://picsum.photos/208',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  },
  {
    id: 'kasdjfjlfasi',
    url: 'https://picsum.photos/205',
    color: 'red,green,blue',
    tags: ['stencil', 'draw', 'freeStyle'],
    projectID: getProjects[0].id,
    type: 'image/png',
    size: 1000,
    name: 'name.png'
  }
]

export const getProject = (idP): Project => {
  const project = getProjects.find(({ id }) => id === idP)
  if (!project) {
    throw new Error('Project not found')
  }

  return project
}

export const createProject = (project: Project): Project => {
  const errors = []
  Object.keys(project).forEach((property) => {
    if (!project[property]) {
      errors.push(`${property} -> '${project[property]}'`)
    }
  })

  if (errors.length > 0) {
    throw new Error(`Error next fields: ${errors.join(', ')}`)
  }

  const projectNew = { id: uuidv4(), ...project }
  getProjects.push(projectNew)

  return projectNew
}

export const getCategoriesSummaryContentsDynamic =
  (): CategoriesSummaryContentsDto => {
    const categoriesFiltered = getCategories.map((category) => {
      const projectsByCategory = getProjects
        .filter(({ categoryID }) => categoryID === category.id)
        .map((project) => {
          const content = getContents.find(({ projectID }) => {
            return projectID === project.id
          })

          if (!content?.id) {
            return null
          }

          return {
            id: project.id,
            name: project.name,
            date: project.date,
            image: content.url
          }
        })
        .filter((pro) => pro)
        .slice(0, 5)

      return {
        id: category.id,
        name: category.name,
        description: category.description,
        projects: projectsByCategory
      }
    })

    return categoriesFiltered
  }

export const getCategoriesSummaryContents = () => {
  return [
    {
      id: '632ace6be7cd92da8b48159b',
      name: 'Coriander',
      projects: [
        {
          id: '632ace6b0e4c2121e782c0e1',
          date: '2022-10-02T02:53:32.251Z',
          name: 'Earbang',
          image: 'https://picsum.photos/200'
        },
        {
          id: '632ace6bbe171ec382459813',
          date: '2022-10-02T16:22:01.304Z',
          name: 'Zenolux',
          image: 'https://picsum.photos/200'
        },
        {
          id: '632ace6b35970e4eeebb55d6',
          date: '2022-09-27T23:09:41.607Z',
          name: 'Firewax',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6bdaf29221809a3569',
          date: '2022-10-08T08:50:22.128Z',
          name: 'Uplinx',
          image: 'https://picsum.photos/90'
        },
        {
          id: '632ace6ba3565eca5a2a6e00',
          date: '2022-09-29T00:52:48.393Z',
          name: 'Namebox',
          image: 'https://picsum.photos/90'
        }
      ],
      description:
        'Exercitation nisi amet ullamco duis cupidatat proident id dolor. Eu voluptate labore proident ea.'
    },
    {
      id: '632ace6b96b703364979fba6',
      name: 'Tubalum',
      projects: [
        {
          id: '632ace6b14c1f67f295064e1',
          date: '2022-10-15T13:02:11.045Z',
          name: 'Architax',
          image: 'https://picsum.photos/90'
        },
        {
          id: '632ace6b476f393c14784039',
          date: '2022-10-07T04:01:29.640Z',
          name: 'Valpreal',
          image: 'https://picsum.photos/90'
        },
        {
          id: '632ace6b227018892916cc2a',
          date: '2022-10-16T21:44:58.351Z',
          name: 'Assitia',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6bdf04459825f0c1cd',
          date: '2022-10-07T05:50:03.564Z',
          name: 'Zenthall',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6b379818ecc42932c6',
          date: '2022-10-18T23:17:47.240Z',
          name: 'Portaline',
          image: 'https://picsum.photos/300'
        }
      ],
      description:
        'Culpa voluptate esse ut id sit nulla commodo et Lorem irure eiusmod velit sint et. Culpa eiusmod nostrud in cillum aute sunt.'
    },
    {
      id: '632ace6b1badc21211519d1a',
      name: 'Tersanki',
      projects: [
        {
          id: '632ace6be12f7df7ca56e277',
          date: '2022-09-27T07:48:06.117Z',
          name: 'Gushkool',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6b9da4f82a27033440',
          date: '2022-10-18T01:51:07.598Z',
          name: 'Reversus',
          image: 'https://picsum.photos/200'
        },
        {
          id: '632ace6bf3877e6195c22815',
          date: '2022-10-10T04:32:31.083Z',
          name: 'Sportan',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6bb31e76eebb6e9a60',
          date: '2022-09-22T04:47:57.582Z',
          name: 'Remold',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6b34eb71930921da54',
          date: '2022-10-03T06:14:49.331Z',
          name: 'Xixan',
          image: 'https://picsum.photos/200'
        }
      ],
      description:
        'Consectetur officia excepteur pariatur pariatur Lorem culpa ex est ex. Nulla irure labore proident voluptate irure duis velit.'
    },
    {
      id: '632ace6be9876b2dfe42067a',
      name: 'Tropoli',
      projects: [
        {
          id: '632ace6b8bdb25746ca088de',
          date: '2022-10-18T23:25:32.783Z',
          name: 'Niquent',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6b27d106f1bf3b9e57',
          date: '2022-10-09T03:10:44.066Z',
          name: 'Hairport',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6b3a7a9176dd0faf2f',
          date: '2022-09-29T00:59:02.402Z',
          name: 'Kegular',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6becff3ba842f78398',
          date: '2022-09-27T11:05:37.173Z',
          name: 'Retrack',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6bdbaacfba381b1fc1',
          date: '2022-09-22T05:38:07.441Z',
          name: 'Musix',
          image: 'https://picsum.photos/150'
        }
      ],
      description:
        'Elit reprehenderit labore eu aute velit. Et officia id aliquip reprehenderit laboris exercitation et cillum eu laboris.'
    },
    {
      id: '632ace6b02636a78686a2e00',
      name: 'Applica',
      projects: [
        {
          id: '632ace6b0a1f9cb9c8e369c3',
          date: '2022-10-11T06:09:18.936Z',
          name: 'Zerology',
          image: 'https://picsum.photos/200'
        },
        {
          id: '632ace6bd4b2c8f079555d0e',
          date: '2022-09-25T06:47:43.760Z',
          name: 'Bedder',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6bb6f7c5911dee2440',
          date: '2022-10-07T20:10:51.168Z',
          name: 'Centrexin',
          image: 'https://picsum.photos/150'
        },
        {
          id: '632ace6bdd0c264b47458635',
          date: '2022-09-24T23:24:41.218Z',
          name: 'Furnigeer',
          image: 'https://picsum.photos/300'
        },
        {
          id: '632ace6bec5912defaa0f63b',
          date: '2022-10-10T05:27:32.573Z',
          name: 'Kiosk',
          image: 'https://picsum.photos/200'
        }
      ],
      description:
        'Ipsum anim consequat qui cupidatat ex Lorem. Deserunt Lorem reprehenderit id sit.'
    }
  ]
}
