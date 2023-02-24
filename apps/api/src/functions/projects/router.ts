import middy from '@middy/core'
import httpRouterHandler, { type Route } from '@middy/http-router'
import { middyAPIGatewayProxy } from '@/middlewares'
import { createController } from './controllers'

const BASE_URL = 'projects'

const routes: Array<Route<any>> = [
  {
    method: 'POST',
    path: `/${BASE_URL}`,
    handler: middy(createController.run)
  }
]

const main = middyAPIGatewayProxy().handler(httpRouterHandler(routes))

export main
