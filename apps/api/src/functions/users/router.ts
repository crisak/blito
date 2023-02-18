import middy from '@middy/core'
import httpRouterHandler, { type Route } from '@middy/http-router'
import httpMultipartBodyParser from '@middy/http-multipart-body-parser'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import { UpdateController } from './controllers'
import { bodyValidator } from '@/middlewares'
import { userUpdateSchema } from './schemas'

const BASE_URL = 'users'

const routes: Array<Route<unknown>> = [
  {
    method: 'PATCH',
    path: `/${BASE_URL}`,
    /** Add middleware for validate of file */
    handler: middy(UpdateController.apply)
      .use(httpHeaderNormalizer())
      .use(httpMultipartBodyParser())
      .use(bodyValidator(userUpdateSchema))
  },
  {
    method: 'POST',
    path: `/${BASE_URL}/in-queue`,
    handler: middy(UpdateController.sendMessage)
  }
]

const handlerRoutes = httpRouterHandler(routes)

export default handlerRoutes
