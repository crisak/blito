import 'source-map-support/register'

import schema from './schema'
import { HandlerEventAPIGatewayProxy } from '@/types'

import {
  getProjects,
  createProject,
  getProject,
  getCategoriesSummaryContents
} from './mockResponse'
import { Project } from '@/models'
import { ResponseApi } from '@/utils'
import { middyAPIGatewayProxy } from '@/middlewares'

const hello: HandlerEventAPIGatewayProxy<typeof schema> = async (event) => {
  let response = null

  console.log('RUN EXECUTE SERVER', JSON.stringify(event.body))

  switch (event.resource) {
    case '/projects':
      if (event.httpMethod === 'POST') {
        response = { ...createProject(event.body as any as Project) }
        break
      }

      if (event.httpMethod === 'GET') {
        response = [...getProjects]
        break
      }
      break
    case '/projects/{id}':
      response = { ...getProject(event?.pathParameters?.id) }
      break
    case '/categories/summary-contents':
      response = [...getCategoriesSummaryContents()]
      break
    default:
      throw new Error('Source not found')
  }

  return ResponseApi.success(response)
}

export const main = middyAPIGatewayProxy().handler(hello)
