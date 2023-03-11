import { ErrorAdapter, ErrorDataAdapter } from './error.adapter'
import ExceptionErrorAdapter from './exceptionError.adapter'
import GraphQLErrorAdapter from './graphQLError.adapter'

export type ErrorResponse = Array<{
  message: string
  type: 'exception' | 'business'
  data?: any
}>

const mapperCodeError = (errors: ErrorDataAdapter[]): ErrorResponse => {
  return errors.map<ErrorResponse[0]>(({ type, message, code, data }) => {
    const typesErrors = ['business', 'exception']

    const typeError = typesErrors.includes(type || '') ? type : 'exception'

    const errors = {
      TRA0001B: { message: 'Example error', type, data },
      default: {
        message: `<strong>Internal error: </strong>"<i>${message}"</i>`,
        type: typeError,
        data
      }
    } as Record<string, ErrorResponse[0]>

    return errors[code || ''] || errors['default']
  })
}

const handleError = (
  error: unknown | Error | any
): ErrorResponse | undefined => {
  console.error('🚨: ', error)

  const validations: ErrorAdapter[] = [
    new GraphQLErrorAdapter(error),
    new ExceptionErrorAdapter(error)
  ]

  for (const instance of validations) {
    if (!instance.hasError()) {
      continue
    }

    return mapperCodeError(instance.getFormatError())
  }
}

export default handleError
