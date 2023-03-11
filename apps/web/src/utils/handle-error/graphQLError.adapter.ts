import type { ErrorGraphQLData, ErrorGraphQL } from '@/types/ErrorGraphQL'

import { ErrorAdapter, ErrorDataAdapter } from './error.adapter'

export default class GraphQLErrorAdapter implements ErrorAdapter {
  public error: any
  private structureData:
    | 'ErrorGraphQL'
    | 'ArrayErrorGraphQL'
    | 'ErrorGraphQLData' = 'ErrorGraphQL'

  constructor(error: any) {
    this.error = error
  }

  private isGraphQLError(error: any) {
    return Boolean(
      'path' in error &&
        'errorType' in error &&
        'locations' in error &&
        'message' in error &&
        'data' in error
    )
  }

  hasError(): boolean {
    if (
      'data' in this.error &&
      'errors' in this.error &&
      Array.isArray(this.error.errors)
    ) {
      this.structureData = 'ErrorGraphQLData'
      const [firstError] = this.error.errors
      return this.isGraphQLError(firstError)
    }

    if (Array.isArray(this.error)) {
      this.structureData = 'ArrayErrorGraphQL'
      const [firstError] = this.error
      return this.isGraphQLError(firstError)
    }

    this.structureData = 'ErrorGraphQL'
    return this.isGraphQLError(this.error)
  }

  getFormatError(): Array<ErrorDataAdapter> {
    let listErrors: ErrorGraphQL[] = []
    if (this.structureData === 'ErrorGraphQLData') {
      const errorGraphQL = this.error as ErrorGraphQLData
      listErrors = errorGraphQL.errors || []
    }

    if (this.structureData === 'ArrayErrorGraphQL') {
      const errorGraphQL = this.error as ErrorGraphQL[]
      listErrors = errorGraphQL || []
    }

    if (this.structureData === 'ErrorGraphQL') {
      const errorGraphQL = this.error as ErrorGraphQL
      listErrors = [errorGraphQL] || []
    }

    return listErrors.map<ErrorDataAdapter>(this.filterError)
  }

  private filterError(error: ErrorGraphQL): ErrorDataAdapter {
    let data = error

    if (error?.data) {
      data =
        error?.data !== 'string'
          ? JSON.stringify(error.data, null, 2)
          : error?.data
    }

    return {
      type: error?.errorType || null,
      message: error?.message || error?.errorInfo || null,
      code: error.errorInfo || null,
      data
    }
  }
}
