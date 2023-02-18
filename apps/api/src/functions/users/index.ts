import { AWSFunction } from '@/types'
import { handlerPath } from '@/utils'

const RESOURCE = 'users'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: RESOURCE,
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Action: ['sqs:SendMessageBatch', 'sqs:SendMessage'],
      Resource:
        'arn:aws:sqs:${aws:region}:${aws:accountId}:${env:QUEUE_NAME_CALC}'
    }
  ],
  events: [
    {
      http: {
        method: 'patch',
        path: `${RESOURCE}`,
        cors: true
      }
    },
    {
      http: {
        method: 'post',
        path: `${RESOURCE}/in-queue`,
        cors: true
      }
    }
  ]
} as AWSFunction
