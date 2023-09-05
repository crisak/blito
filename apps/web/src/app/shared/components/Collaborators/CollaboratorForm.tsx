'use client'
import { ACollaborator, ASocialNetwork } from '@/models'
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  InputProps,
  Spacer
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import {
  Controller,
  ControllerProps,
  FieldErrors,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { LuContact } from 'react-icons/lu'
import { VscMail, VscTrash } from 'react-icons/vsc'
import { toast } from 'react-toastify'
import { MetadataScreens } from './Collaborator.constants'

import { Box, ScreenPage } from '@/app/shared/ui'
import { useCollaboratorStore } from '@/store'
import { LogUtil } from '@/utils'
import { Storage } from 'aws-amplify'
import { TypeSocialNetwork } from 'blito-models'
import clsx from 'clsx'
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTiktok,
  BsTwitter,
  BsYoutube
} from 'react-icons/bs'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { VscAdd } from 'react-icons/vsc'
import UploadFile from './UploadFile'

// const initialFormData: ACollaborator = {
//   id: '',
//   username: '',
//   email: '',
//   phone: '',
//   socials: [],
//   fullName: '',
//   photoUrl: '',
//   createdAt: '',
//   updatedAt: '',
//   _version: 0,
//   _deleted: false
// }

/** F = Form */

type FASocialNetwork = ASocialNetwork & { id: string }

type FACollaborator = Omit<ACollaborator, 'socials'> & {
  socials: Array<FASocialNetwork>
}

const getStr = (str?: string | null) =>
  (str || '')
    .replace(/\s+/g, '') // Reemplaza espacios con guiones bajos
    .replace(/\n+/g, '') // Reemplaza saltos de línea con guiones bajos
    .toLowerCase() // Convierte todo a minúsculas

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
}

const getExtension = (name: string) => {
  const partesDelNombre = name.split('.') || []
  if (partesDelNombre.length > 1) {
    return partesDelNombre.pop()?.toLowerCase()
  } else {
    return ''
  }
}

const showToastError = (error: unknown) => {
  if (error instanceof Error) {
    toast(error?.message || '', {
      type: 'warning',
      autoClose: false
    })
    return
  }

  toast(`Error interno: ${JSON.stringify(error)}`, {
    type: 'error',
    autoClose: false
  })
}

type CollaboratorFormProps = {
  collaborator?: ACollaborator
}
const iconSocialClasses =
  'text-xl text-default-500 pointer-events-none flex-shrink-0'

const Icons = {
  [TypeSocialNetwork.FACEBOOK]: BsFacebook,
  [TypeSocialNetwork.INSTAGRAM]: BsInstagram,
  [TypeSocialNetwork.YOUTUBE]: BsYoutube,
  [TypeSocialNetwork.TIKTOK]: BsTiktok,
  [TypeSocialNetwork.PINTEREST]: BsPinterest,
  [TypeSocialNetwork.TWITTER]: BsTwitter
}

const IconSocial = ({ socialType }: { socialType: TypeSocialNetwork }) => {
  const Icon = Icons[socialType]
  return <Icon className={iconSocialClasses} />
}

const optionsSocialNetwork = [
  { key: TypeSocialNetwork.FACEBOOK, label: 'Facebook', icon: BsFacebook },
  { key: TypeSocialNetwork.INSTAGRAM, label: 'Instagram', icon: BsInstagram },
  { key: TypeSocialNetwork.YOUTUBE, label: 'YouTube', icon: BsYoutube },
  { key: TypeSocialNetwork.TIKTOK, label: 'TikTok', icon: BsTiktok },
  { key: TypeSocialNetwork.PINTEREST, label: 'Pinterest', icon: BsPinterest },
  { key: TypeSocialNetwork.TWITTER, label: 'Twitter', icon: BsTwitter }
]

const classNamesIcons = (hasError?: unknown) =>
  clsx('pointer-events-none flex-shrink-0 text-2xl transition-all', {
    'text-default-400': !Boolean(hasError),
    'text-danger': Boolean(hasError)
  })

function useInput<T extends Record<string, any>>({
  errors
}: {
  errors: FieldErrors<T>
}) {
  return (keyField: keyof T): Partial<InputProps> => {
    return {
      fullWidth: true,
      variant: 'bordered',
      validationState: errors[keyField] ? 'invalid' : 'valid',
      'aria-invalid': errors[keyField] ? 'true' : 'false',
      errorMessage: errors[keyField] && String(errors[keyField]?.message)
    }
  }
}

const CollaboratorForm = ({
  collaborator: collaboratorEdit
}: CollaboratorFormProps) => {
  LogUtil.debug('collaboratorEdit', collaboratorEdit)

  const screenNavigation = ScreenPage.useScreenPage<MetadataScreens>()
  const {
    register,
    handleSubmit,
    setValue: setFormData,
    watch: watchFormData,
    reset: resetFormData,
    control: controlFormData,
    formState: { errors, isValid: isValidForm }
  } = useForm<FACollaborator>({
    values: !collaboratorEdit
      ? undefined
      : {
          ...collaboratorEdit,
          socials:
            collaboratorEdit?.socials?.map<FASocialNetwork>((social) => ({
              ...social,
              id: String(social.type + social.url + social.username)
            })) || []
        }
  })

  const inputProps = useInput<FACollaborator>({ errors })

  const [loading, create, update] = useCollaboratorStore((state) => [
    state.loading,
    state.create,
    state.update
  ])

  const [profileImage, setProfileImage] = useState<File | null>(null)

  const isUpdating = Boolean(collaboratorEdit?.id)

  const onSubmit: SubmitHandler<FACollaborator> = async (formDataEvent) => {
    let response = null
    const { socials = [], ...formDataDB } = formDataEvent

    /** Save file in S3 */

    const result = {
      ...formDataDB,
      socials: socials.map(({ id: _, ...social }) => social),
      photoUrl: ''
    } as ACollaborator

    if (profileImage) {
      const extension = getExtension(profileImage.name)
      const name = `${getStr(result?.fullName)}-${getStr(
        result?.username
      )}.${extension}`
      const pathName = `avatar-images/${name}`

      LogUtil.debug('Before upload', '...')

      const results3 = await Storage.put(pathName, profileImage, {
        level: 'public',
        contentType: profileImage.type
      })

      LogUtil.debug('results3', results3)
    }

    LogUtil.debug('Result', result)

    return

    /** Update */
    if (result.id) {
      response = await update(result).catch((error) => {
        showToastError(error)
        return false
      })
    }

    /** Create */
    if (!result.id) {
      const { _deleted, _version, id, ...postRequest } = result
      response = await create(postRequest).catch((error) => {
        showToastError(error)
        return false
      })
    }

    if (response === false) {
      return
    }

    resetFormData()
    LogUtil.debug('onSubmit.formData', result)
    showToastSuccess()
    screenNavigation.pop()
  }

  const handleCancel = () => {
    screenNavigation.pop()
  }

  const currentSocials = watchFormData('socials') || []

  LogUtil.debug('currentSocialsWatch', currentSocials)

  useEffect(() => {
    if (collaboratorEdit?.photoUrl) {
      const extension = getExtension(collaboratorEdit.photoUrl)
      const name = `${getStr(collaboratorEdit?.fullName)}-${getStr(
        collaboratorEdit?.username
      )}.${extension}`

      fetch(collaboratorEdit.photoUrl)
        .then((response) => {
          return response.arrayBuffer()
        })
        .then((buffer) => {
          setProfileImage(new File([buffer], name))
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collaboratorEdit?.photoUrl])

  return (
    <>
      <ScreenPage.Header
        title={(isUpdating ? 'Editar' : 'Crear') + ' Colaborador'}
      />
      <ScreenPage.Body>
        <Spacer y={1} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '100%' }}
          className="flex flex-col gap-unit-xl pt-unit-lg"
        >
          <UploadFile
            onChange={(file) => {
              setProfileImage(file)
            }}
            file={profileImage}
          />

          <InputControl
            isRequired
            label="Nombre completo"
            endContent={
              <LiaUserCheckSolid className={classNamesIcons(errors.fullName)} />
            }
            control={controlFormData}
            name="fullName"
          />

          <InputControl
            isRequired
            label="Apodo artístico"
            endContent={
              <LiaUserCheckSolid className={classNamesIcons(errors.username)} />
            }
            control={controlFormData}
            name="username"
          />

          <div className="flex flex-col gap-unit-xl xl:flex-row">
            <InputControl
              className="w-full xl:w-6/12"
              label="Correo"
              rules={{
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'El formato del correo no es valido'
                },
                maxLength: {
                  value: 100,
                  message: 'El valor no puede ser mayor a 100 caracteres'
                }
              }}
              endContent={<VscMail className={classNamesIcons(errors.email)} />}
              control={controlFormData}
              name="email"
            />

            <InputControl
              className="w-full xl:w-6/12"
              label="Teléfono"
              control={controlFormData}
              name="phone"
              rules={{
                pattern: {
                  value: /^\+\d{6,15}$/,
                  message:
                    'El formato del numero no es valido, debe contener el código del país eje: (+57...)'
                },
                maxLength: {
                  value: 100,
                  message: 'El valor no puede ser mayor a 20 caracteres'
                }
              }}
              endContent={
                <LuContact className={classNamesIcons(errors.phone)} />
              }
            />
          </div>

          <div>
            <Divider orientation="horizontal" />
          </div>

          {/* Component list */}
          <section className="section-social">
            <Controller
              name="socials"
              control={controlFormData}
              defaultValue={[]}
              render={({ field, fieldState, formState }) => {
                LogUtil.debug('Fields full name', {
                  field,
                  fieldState,
                  formState
                })

                const { value = [] } = field

                const socialsValue = value

                return (
                  <>
                    <div className="flex items-center justify-between">
                      <label htmlFor="social">Redes sociales</label>
                      <Button
                        size="sm"
                        isIconOnly
                        variant="ghost"
                        color="primary"
                        onClick={() => {
                          setFormData('socials', [
                            ...socialsValue,
                            {
                              type: TypeSocialNetwork.FACEBOOK,
                              username: '',
                              url: '',
                              id: Date.now().toString()
                            }
                          ])
                        }}
                      >
                        <VscAdd className="font-bold" />
                      </Button>
                    </div>

                    <div className="mt-unit-lg flex flex-col gap-unit-lg">
                      {socialsValue.map((soc, socialIndex) => (
                        <div
                          className="flex items-center gap-unit-lg"
                          key={soc.id}
                        >
                          <Dropdown radius="sm">
                            <DropdownTrigger>
                              <Button
                                variant="bordered"
                                isIconOnly={Boolean(soc.type)}
                              >
                                {soc?.type ? (
                                  <IconSocial socialType={soc?.type} />
                                ) : (
                                  'Red social'
                                )}
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                              variant="faded"
                              aria-label="Dropdown menu with icons"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={new Set([soc.type])}
                              onSelectionChange={(data) => {
                                if (data instanceof Set) {
                                  const value = Array.from(
                                    data
                                  )[0] as TypeSocialNetwork

                                  setFormData(
                                    'socials',
                                    socialsValue.map((social) => {
                                      if (soc.id === social.id) {
                                        return {
                                          ...social,
                                          type: value
                                        }
                                      }
                                      return social
                                    })
                                  )
                                }
                              }}
                            >
                              {optionsSocialNetwork.map(
                                ({ key, icon: IconSocial, label }) => (
                                  <DropdownItem
                                    key={key}
                                    startContent={
                                      <IconSocial
                                        className={iconSocialClasses}
                                      />
                                    }
                                  >
                                    {label}
                                  </DropdownItem>
                                )
                              )}
                            </DropdownMenu>
                          </Dropdown>

                          <InputControl
                            isRequired
                            size="sm"
                            label="Nombre de usuario"
                            control={controlFormData}
                            name={`socials[${socialIndex}].username`}
                          />

                          <InputControl
                            isRequired
                            size="sm"
                            label="URL"
                            type="url"
                            control={controlFormData}
                            name={`socials[${socialIndex}].url`}
                          />

                          <Button
                            isIconOnly
                            color="danger"
                            variant="light"
                            onClick={() => {
                              setFormData(
                                'socials',
                                socialsValue.filter((_) => {
                                  return _.id !== soc.id
                                })
                              )
                            }}
                          >
                            <VscTrash />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </>
                )
              }}
            />
          </section>

          <ScreenPage.Footer isSticky>
            <Box className="flex justify-end gap-unit-md">
              <Button
                type="reset"
                variant="light"
                color="primary"
                className={clsx({
                  'opacity-50': loading === 'create' || loading === 'update'
                })}
                onClick={handleCancel}
              >
                Cancelar
              </Button>

              {!isUpdating && (
                <Button
                  type="submit"
                  color="primary"
                  className={clsx({
                    'opacity-50': !isValidForm || loading === 'create'
                  })}
                  isLoading={loading === 'create'}
                >
                  Guardar
                </Button>
              )}

              {isUpdating && (
                <Button
                  type="submit"
                  color="primary"
                  className={clsx({
                    'opacity-50': !isValidForm || loading === 'update'
                  })}
                  isLoading={loading === 'update'}
                >
                  Actualizar
                </Button>
              )}
            </Box>
          </ScreenPage.Footer>
        </form>
      </ScreenPage.Body>
    </>
  )
}

// const controlForm: Control<FACollaborator, any>

type InputControlProps = InputProps &
  Pick<ControllerProps, 'name' | 'rules' | 'defaultValue'> & {
    control: any
  }

function InputControl({
  name,
  control,
  rules,
  defaultValue,
  ...inputProps
}: InputControlProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={
        rules || {
          required: 'Este campo es requerido',
          maxLength: {
            value: 100,
            message: 'El valor no puede ser mayor a 100 caracteres'
          }
        }
      }
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { value, ...fieldControlProps } = field
        const errors = fieldState?.error || null

        return (
          <Input
            {...inputProps}
            {...fieldControlProps}
            fullWidth
            variant="bordered"
            value={value || ''}
            validationState={errors ? 'invalid' : 'valid'}
            aria-invalid={errors ? 'true' : 'false'}
            errorMessage={errors && String(errors?.message)}
          />
        )
      }}
    />
  )
}

export default CollaboratorForm
