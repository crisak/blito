import 'source-map-support/register'

import { SQSBatchResponse, SQSEvent, SQSHandler } from 'aws-lambda'
import { DBType } from '@/utils/db'

export const main: SQSHandler = async (event: SQSEvent) => {
  console.log('⛳️ Event->', event)
  console.log('⛳️ Records->', event.Records)

  const records = event.Records

  const failedMessages: SQSBatchResponse = {
    batchItemFailures: []
  }

  for (const record of records) {
    const user = JSON.parse(record.body) as DBType

    console.log('user.number->', user.number)
    /**
     * Si el mensaje tiene >= 5 eliminar el mensaje de la
     * cola y guardarlo en una base de datos o enviar un
     * correo notificando el error
     * */
    const maxAttempts = 3
    if (Number(record.attributes.ApproximateReceiveCount) >= maxAttempts) {
      console.error('📪 SEND EMAIL - ERROR', record)
      continue
    }

    if ([100, 500, 1000, 1500].includes(user.number)) {
      console.error(record)
      failedMessages.batchItemFailures.push({
        itemIdentifier: record.messageId
      })
    }
  }

  console.log('Response Queue->', failedMessages)
  return failedMessages
}
