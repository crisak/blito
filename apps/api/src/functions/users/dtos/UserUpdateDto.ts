import type { User } from '@/models'

export type UserUpdateDto = Partial<Pick<User, 'phone' | 'email'>> & {
  profilePicture?: {
    filename: string
    mimetype: 'image/jpeg' | 'image/png'
    encoding: string
    truncated: boolean
    content: Buffer
  }
}

export type ResultUserUpdateDto = {
  message: string
}
