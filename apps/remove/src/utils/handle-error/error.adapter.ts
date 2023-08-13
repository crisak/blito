export type ErrorDataAdapter = {
  message: string | null
  type: string | 'exception' | 'business' | null
  code: string | null
  data: any | null
}

export interface ErrorAdapter {
  error: any
  hasError: () => boolean
  getFormatError: () => Array<ErrorDataAdapter>
}
