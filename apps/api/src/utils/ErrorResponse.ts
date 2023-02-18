import { ERROR_CODES } from '@/enums';

interface IErrorResponse<T> {
  code: ERROR_CODES;
  message: string;
  data: T;
}

export default class ErrorResponse<T> implements IErrorResponse<T> {
  code: ERROR_CODES;
  message: string;
  data: T;

  constructor(dataError: Partial<IErrorResponse<T>>) {
    this.code = dataError.code || ERROR_CODES.GEN_BAD_REQUEST;
    this.message = dataError.message || 'Bad request';
    this.data = dataError.data || null;
  }
}
