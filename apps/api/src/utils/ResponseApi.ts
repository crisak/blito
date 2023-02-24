import type { APIGatewayProxyResult } from 'aws-lambda'
import ErrorResponse from './ErrorResponse'

export default class ResponseApi {
  static success<T>(response: T, statusCode = 200): APIGatewayProxyResult {
    return {
      statusCode,
      body: JSON.stringify(response)
    }
  }

  static error<T = unknown>(
    response: T | ErrorResponse<unknown>,
    statusCode = 400
  ): APIGatewayProxyResult {
    // eslint-disable-next-line no-console
    console.error('🚨Error server: ', response)
    let body = response

    if (
      !(response instanceof ErrorResponse) &&
      !(
        response instanceof Object &&
        'code' in response &&
        'data' in response &&
        'message' in response
      )
    ) {
      body = new ErrorResponse({
        message: response instanceof Error ? response?.message : '',
        data: response
      })
    }

    return {
      statusCode,
      body: JSON.stringify(body)
    }
  }
}
