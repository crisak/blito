import ErrorResponse from './ErrorResponse';

export default class ResponseApi {
  static success<T>(response: T, statusCode = 200) {
    return {
      statusCode,
      body: JSON.stringify(response),
    };
  }

  static error<T = unknown>(response: T | ErrorResponse<unknown>, statusCode = 400) {
    // eslint-disable-next-line no-console
    console.error('🚨Error server: ', response);
    let body = response;
    if (
      !(response instanceof ErrorResponse) &&
      !('code' in response && 'data' in response && 'message' in response)
    ) {
      body = new ErrorResponse({
        message: response instanceof Error ? response?.message : null,
        data: response,
      });
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  }
}
