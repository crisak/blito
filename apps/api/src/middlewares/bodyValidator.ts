import { ERROR_CODES } from '@/enums'
import { ErrorResponse, ResponseApi } from '@/utils'
import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { BaseSchema } from 'yup'

const isObject = (data: any) => {
  return !Array.isArray(data) && typeof data === 'object'
}

const hasProperties = (data: any) => {
  return Object.keys(data).length > 0
}

const bodyValidator = (schema: BaseSchema) => {
  const before: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  > = async (request) => {
    try {
      const { body } = request.event

      let resultBody = {}
      if (schema) {
        resultBody = schema.validateSync(body, { abortEarly: false })
      }

      if (isObject(resultBody) && !hasProperties(resultBody)) {
        throw new ErrorResponse({
          data: {
            body: 'The body must not be empty'
          },
          code: ERROR_CODES.GEN_PAYLOAD_INVALID
        })
      }

      return
    } catch (errors) {
      if (errors instanceof ErrorResponse) {
        return ResponseApi.error(errors)
      }

      const errorMap: Record<string, string> = {}

      for (const error of errors?.inner || []) {
        let property = error.path

        if (error.type === 'noUnknown') {
          property = error.params.unknown
        }

        if (error.type === 'typeError') {
          property = 'body'
        }

        errorMap[property] = error.message
      }

      const dataError = new ErrorResponse({
        data: errorMap,
        code: ERROR_CODES.GEN_PAYLOAD_INVALID
      })

      return ResponseApi.error(dataError)
    }
  }

  return {
    before
  }
}

export default bodyValidator
