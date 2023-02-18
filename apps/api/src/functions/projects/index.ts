import { AWSFunction } from '@/types'
import { handlerPath } from '@/utils'

const RESOURCE = 'projects'

export default {
  name: RESOURCE,
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: RESOURCE,
        cors: true
      }
    },
    {
      http: {
        method: 'get',
        path: `${RESOURCE}/{id}`,
        cors: true
      }
    },
    {
      http: {
        method: 'get',
        path: `${RESOURCE}/{id}/contents`,
        cors: true
      }
    },
    {
      http: {
        method: 'post',
        path: RESOURCE,
        cors: true
      }
    },
    {
      http: {
        method: 'get',
        path: 'categories/summary-contents',
        cors: true
      }
    }
  ]
} as AWSFunction<'projects'>
