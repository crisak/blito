export default class StringUtil {
  static capitalize(str: string) {
    const originalText = str || ''
    const formattedText =
      originalText.charAt(0).toUpperCase() + originalText.slice(1).toLowerCase()
    return formattedText
  }
}
