export default class FilesUtil {
  /**
   *
   * @param url https://blitoa1669ad374a84249be178ad12241cd9b133401-dev.s3.us-east-1.amazonaws.com/public/avatar-images/pabloguerrero-blito.png?x-amz-content-sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&x&X-Amz-Signature=55e82dad25177af8af7f01f2b917fb7750c6a101b4b0ec68b74057dc4471d23b
   * @returns avatar-images/pabloguerrero-blito.png
   */
  static getKey(url: string | undefined | null) {
    if (!url) {
      return ''
    }

    const isUrl = url.includes('http')

    if (!isUrl) {
      return url
    }

    const urlInstance = new URL(url)
    const keyFileName = urlInstance.pathname.replace(
      /(\/public\/|\/private\/|\/protected\/)/g,
      ''
    )
    return keyFileName || ''
  }

  static getExtension(filePath: string) {
    const partesDelNombre = filePath.split('.') || []
    if (partesDelNombre.length > 1) {
      return partesDelNombre.pop()?.toLowerCase()
    } else {
      return ''
    }
  }
}
