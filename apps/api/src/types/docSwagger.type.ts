/** PATCH - /users */
export interface UserUpdateDto {
  phone?: string
  email?: string
  profilePicture?: {
    filename: string
    mimetype: 'image/jpeg' | 'image/png'
    encoding: string
    truncated: boolean
    content: Buffer
  }
}

export interface ResultProjectsDto {
  id: string
  userID: string
  name: string
  /**
   * ISO 8601
   */
  date: string
  banner: string
  description: string
  categoryID: string
  location: {
    position: { latitude: number; longitude: number }
    address: string
    /**
     * Stands CODE with ISO
     */
    country: string
    state: string
  }
}

export interface ErrorDto {
  code: string
  message: string
  data: object
}
