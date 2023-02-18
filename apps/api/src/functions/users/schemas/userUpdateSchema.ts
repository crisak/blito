import { Regex } from '@/utils'
import { UserUpdateDto } from './../dtos'
import * as yup from 'yup'

const profilePicture: yup.SchemaOf<UserUpdateDto['profilePicture']> = yup
  .object()
  .shape({
    filename: yup.string(),
    /** todo - validate type file */
    mimetype: yup.string(),
    encoding: yup.string(),
    truncated: yup.boolean(),
    content: yup.mixed<Buffer>()
  })
  .optional()

const userUpdateSchema: yup.SchemaOf<UserUpdateDto> = yup
  .object()
  .shape({
    email: yup.string().email().max(100).optional(),
    phone: yup
      .string()
      .min(7)
      .max(20)
      .matches(Regex.phoneNumberCognito)
      .optional(),
    profilePicture
  })
  .noUnknown(true)
  .strict()
  .required()

export default userUpdateSchema
