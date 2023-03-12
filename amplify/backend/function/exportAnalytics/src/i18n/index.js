// @ts-check
const requireDir = require("require-dir");

/**
 * @doc
 * ```js
 * const i18n = I18n.getInstance(); // default is en
 * const i18n = I18n.getInstance({ locale: 'es' }); // specify locale
 *
 * console.log(i18n.t('key.message'))
 * console.log(i18n.t('key.message', { locale: 'es' })) // Set locale options
 * console.log(i18n.t('key.message', { params: { name: 'Crisak', age: 12 } })) // Send params dynamic
 * ```
 */
class I18n {
  /** @type {I18n | null} */
  static instance = null;

  constructor({ locale } = { locale: "en" }) {
    /** @type {{ [countryCode: string]: { [keyMessage: string]: string } }} */
    this.languages = requireDir("./messages");
    this.locale = locale;
  }

  /**
   * Method for create Pattern Singleton, this help to load all files of translate
   */
  static getInstance() {
    if (!I18n.instance) {
      I18n.instance = new I18n();
    }

    return I18n.instance;
  }

  /**
   * Function that return the message data
   * @param {string} keyMessage Key message in json language
   * @param {{params?: object | string, locale?: string}?} [options]
   * @returns {string} Return message translate
   */
  t(keyMessage, options) {
    const language = options?.locale || this.locale;

    const messageTranslate = this.languages[language][keyMessage];

    /** If not exist message return same message */
    if (!messageTranslate) {
      return keyMessage;
    }

    if (options?.params) {
      const metadata =
        typeof options.params === "string"
          ? JSON.parse(options.params)
          : options.params;

      const placeholders = Object.keys(metadata).map((key) => `{${key}}`);
      const values = Object.values(metadata);

      const messageParse = placeholders.reduce(
        (acc, placeholder, index) => acc.replace(placeholder, values[index]),
        messageTranslate
      );

      return messageParse;
    }

    return messageTranslate;
  }
}

module.exports = I18n;
