import type { GatewayProxyEvent, UserUpdateDto } from '@/types'
import { ResponseApi } from '@/utils'
import { type APIGatewayProxyResult } from 'aws-lambda'
import * as AWS from 'aws-sdk'
import db, { type DBType } from '@/utils/db'

const sqs = new AWS.SQS()

class UpdateController {
  static async apply(
    event: GatewayProxyEvent<UserUpdateDto>
  ): Promise<APIGatewayProxyResult> {
    return ResponseApi.success(event)
  }

  static async sendMessage(
    event: GatewayProxyEvent<{ indexStart: number; indexEnd: number }>
  ) {
    const index = event.body
    const queueUrl = process.env.QUEUE_URL

    let listUsers = [...db].slice(index.indexStart, index.indexEnd)
    let chunks: Array<DBType[]> = []
    let chunkSize = 10

    for (let i = 0; i < listUsers.length; i += chunkSize) {
      chunks.push(listUsers.slice(i, i + chunkSize))
    }

    const response = await Promise.all(
      chunks.map((bathUsers, index) => {
        // 10 records by batch
        const messages = [] as AWS.SQS.SendMessageBatchRequest['Entries']
        const groupId = `${Date.now()}-${index}`
        bathUsers.forEach((user) => {
          messages.push({
            Id: user.id,
            MessageBody: JSON.stringify(user),
            MessageGroupId: groupId
          })
        })

        const sendMessageBatchParams: AWS.SQS.SendMessageBatchRequest = {
          Entries: messages,
          QueueUrl: queueUrl
        }

        return sqs.sendMessageBatch(sendMessageBatchParams).promise()
      })
    )

    console.log('Response->', response)
    return ResponseApi.success(response)
  }
}

export default UpdateController
