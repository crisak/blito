import { ErrorAdapter, ErrorDataAdapter } from './error.adapter'

export default class ExceptionErrorAdapter implements ErrorAdapter {
  public error: any
  constructor(error: any) {
    this.error = error
  }

  private setMapperError(error: any): ErrorDataAdapter {
    let data = error
    if (error?.data) {
      data =
        error?.data !== 'string'
          ? JSON.stringify(error.data, null, 2)
          : error?.data
    }

    return {
      type: error?.type || error?.name || error?.typeError || null,
      message: error?.message || error?.info || null,
      code: error?.code || error?.errorCode || null,
      data
    }
  }

  hasError(): boolean {
    return true
  }

  getFormatError(): Array<ErrorDataAdapter> {
    if (Array.isArray(this.error)) {
      return this.error.map(this.setMapperError)
    }

    return [this.setMapperError(this.error)]
  }
}
