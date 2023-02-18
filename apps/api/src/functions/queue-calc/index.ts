import { AWSFunction } from '@/types'
import { handlerPath } from '@/utils'

const RESOURCE = 'queue'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: RESOURCE,

  events: [
    {
      sqs: {
        batchSize: 10,
        functionResponseType: 'ReportBatchItemFailures',
        arn: {
          'Fn::GetAtt': ['QueueCalcUsers', 'Arn']
        }
      }
    }
  ]
} as AWSFunction
