/* eslint-disable no-console */

export default class LogUtil {
  static log(title: string, ...options: unknown[]) {
    console.log(`▶ ${title}:`, ...options)
  }

  static debug(title: string, ...options: unknown[]) {
    console.debug(`🧪 ${title}:`, ...options)
  }

  static warn(title: string, ...options: unknown[]) {
    console.warn(`🚧 ${title}:`, ...options)
  }

  static error(title: string, ...options: unknown[]) {
    console.error(`🚨 ${title}: `, ...options)
  }
  static errorDetail(
    title: string,
    error: object | Error | string | unknown,
    payload: object | unknown,
    ...params: ({ prettyAll: boolean } | { prettyError: boolean } | unknown)[]
  ) {
    // @ts-ignore
    const prettyError = params?.find((ops) => Boolean(ops && ops?.prettyError))
    /** prettyAll by default is true */
    // @ts-ignore
    const noPrettyDta = params?.find((ops) => ops?.prettyAll === false)

    let errorDisplay = prettyError ? JSON.stringify(error, null, 2) : error

    console.error(
      `🚧 ${title}: `,
      errorDisplay,
      '\n\nPayload:',
      JSON.stringify(payload, null, 2),
      ...params?.map((msg) => {
        if (noPrettyDta) {
          return msg
        }

        if (typeof msg === 'object' && !noPrettyDta) {
          /** Data object */
          return JSON.stringify(msg, null, 2)
        }

        return `\n-------------------\n${msg}`
      })
    )
  }
}
