export interface Project {
  id: string
  userID: string
  name: string
  /**
   * ISO 8601
   */
  date: string
  banner: string
  description: string
  tags?: string
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

export const ProjectDefaultState: Project = {
  id: '',
  userID: '',
  name: '',
  date: '',
  banner: '',
  description: '',
  tags: '',
  categoryID: '',
  location: {
    position: { latitude: 0, longitude: 0 },
    address: '',
    country: '',
    state: ''
  }
}
