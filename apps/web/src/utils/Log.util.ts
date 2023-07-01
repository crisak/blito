export default class LogUtil {
  static errorDetail(
    title: string,
    error: object | Error | string | unknown,
    payload: object | unknown,
    ...params: (unknown | { prettyError: boolean })[]
  ) {
    // @ts-ignore
    const prettyError = params?.find((ops) => Boolean(ops && ops?.prettyError))

    let errorDisplay = prettyError ? JSON.stringify(error, null, 2) : error

    console.error(
      `🚧 ${title}: `,
      errorDisplay,
      '\n\nPayload:',
      JSON.stringify(payload, null, 2),
      ...params
    )
  }
}
