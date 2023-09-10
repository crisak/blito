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
import {
  Controller,
  ControllerProps,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form'
import { LuContact } from 'react-icons/lu'
import { VscMail, VscTrash } from 'react-icons/vsc'
import { toast } from 'react-toastify'
import { MetadataScreens } from './Collaborator.constants'

import { Box, ScreenPage } from '@/app/shared/ui'
import { useCollaboratorStore } from '@/store'
import { TypeSocialNetwork } from 'blito-models'
import clsx from 'clsx'
import { useState } from 'react'
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

/** F = Form */

type FASocialNetwork = ASocialNetwork & { id: string }

type FACollaborator = Omit<ACollaborator, 'socials'> & {
  socials: Array<FASocialNetwork>
}

const showToastSuccess = (
  message: string | React.ReactNode = 'Datos guardaos exitosamente'
) => {
  toast(message, {
    type: 'success'
  })
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

const CollaboratorForm = ({
  collaborator: collaboratorEdit
}: CollaboratorFormProps) => {
  const screenNavigation = ScreenPage.useScreenPage<MetadataScreens>()
  const {
    handleSubmit,
    setValue: setFormData,
    getValues: getFormData,
    reset: resetFormData,
    control: controlFormData,
    formState: { errors, isValid: isValidForm }
  } = useForm<FACollaborator>({
    defaultValues: !collaboratorEdit
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

  const [loading, create, update] = useCollaboratorStore((state) => [
    state.loading,
    state.create,
    state.update
  ])

  const [urlSigned, setUrlSigned] = useState<string>(
    collaboratorEdit?.photoUrl || ''
  )

  const isUpdating = Boolean(collaboratorEdit?.id)

  const processData = async (
    formDataEvent: FACollaborator,
    options?: { updateOnlyFile?: boolean }
  ) => {
    let response = null
    const { socials = [], ...formDataDB } = formDataEvent

    const photoUrl = options?.updateOnlyFile
      ? formDataDB.photoUrl
      : urlSigned || ''

    const result = {
      ...formDataDB,
      socials: socials.map(({ id: _, ...social }) => social),
      photoUrl
    } as ACollaborator

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

    if (options?.updateOnlyFile) {
      return
    }

    resetFormData()
    showToastSuccess()
    screenNavigation.pop()
  }

  const onSubmit: SubmitHandler<FACollaborator> = (formDataEvent) => {
    processData(formDataEvent)
  }

  const handleUpdatePhoto = async (urlSigned: string) => {
    setUrlSigned(urlSigned)
    if (collaboratorEdit?.id) {
      processData(
        {
          ...getFormData(),
          photoUrl: urlSigned
        },
        { updateOnlyFile: true }
      )
    }
  }

  const handleCancel = () => {
    screenNavigation.pop()
  }

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
            onChange={handleUpdatePhoto}
            defaultValue={urlSigned}
            userId={collaboratorEdit?.id}
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

          {/* <div>
            
          </div> */}

          <Divider orientation="horizontal" />

          {/* Component list */}
          <ListSocialNetwork
            control={controlFormData}
            getValues={getFormData}
            setValue={setFormData}
          />

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

type ListSocialNetworkProps = Partial<
  ReturnType<typeof useForm<FACollaborator>>
>

function ListSocialNetwork({
  control: controlFormData,
  getValues,
  setValue
}: ListSocialNetworkProps) {
  const {
    fields: socials,
    append,
    remove: removeSocialItem
    // prepend
  } = useFieldArray({
    control: controlFormData,
    name: 'socials'
  })

  return (
    <section className="flex flex-col gap-unit-lg">
      <div className="form-red-social flex items-center justify-between">
        <label htmlFor="social">Redes sociales</label>
        <Button
          size="sm"
          isIconOnly
          variant="ghost"
          color="primary"
          onClick={() => {
            append({
              type: TypeSocialNetwork.FACEBOOK,
              username: '',
              url: '',
              id: Date.now().toString()
            })
          }}
        >
          <VscAdd className="font-bold" />
        </Button>
      </div>

      {socials.length > 0 && (
        <div className="list-red-socials flex flex-col gap-unit-md">
          {socials.map((soc, socialIndex) => (
            <div className="flex items-center gap-unit-lg" key={soc.id}>
              <Controller
                // @ts-ignore
                name={`socials[${socialIndex}].type`}
                control={controlFormData}
                defaultValue={getValues ? getValues('socials') : []}
                render={({ field }) => {
                  const typeValue = field.value as TypeSocialNetwork

                  return (
                    <div {...field}>
                      <Dropdown radius="sm">
                        <DropdownTrigger>
                          <Button
                            variant="bordered"
                            isIconOnly={Boolean(typeValue)}
                          >
                            {typeValue ? (
                              <IconSocial socialType={typeValue} />
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
                          selectedKeys={new Set([typeValue])}
                          onSelectionChange={(data) => {
                            if (data instanceof Set) {
                              const value = Array.from(
                                data
                              )[0] as TypeSocialNetwork

                              if (setValue) {
                                // @ts-ignore
                                setValue(`socials[${socialIndex}].type`, value)
                              }
                            }
                          }}
                        >
                          {optionsSocialNetwork.map(
                            ({ key, icon: IconSocial, label }) => (
                              <DropdownItem
                                key={key}
                                startContent={
                                  <IconSocial className={iconSocialClasses} />
                                }
                              >
                                {label}
                              </DropdownItem>
                            )
                          )}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  )
                }}
              />

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
                  removeSocialItem(socialIndex)
                }}
              >
                <VscTrash />
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default CollaboratorForm
