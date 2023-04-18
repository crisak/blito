import { APIGatewayProxyHandler } from 'aws-lambda'
import { ContentType } from 'blito-models'
import { getData } from './api'

export const handler: APIGatewayProxyHandler = async (event) => {
  // eslint-disable-next-line no-console
  console.log(`EVENT: ${JSON.stringify(event)}`)
  await getData()
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify({
      message: ContentType.ALBUM
    })
  }
}
