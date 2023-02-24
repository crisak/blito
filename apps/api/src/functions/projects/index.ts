import { AWSFunction } from '@/types'
import { handlerPath } from '@/utils'

const RESOURCE = 'projects'

export default {
  name: RESOURCE,
  handler: `${handlerPath(__dirname)}/router.main`,
  events: [
    {
      http: {
        method: 'post',
        path: RESOURCE,
        cors: true
      }
    }
  ]
} as AWSFunction<'projects'>
