'use client'

import { Text } from '@/app/shared/ui'
import { ACollaborator } from '@/models'
import { useCollaboratorStore } from '@/store'
import { Avatar, Button } from '@nextui-org/react'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { VscDeviceCamera, VscTrash } from 'react-icons/vsc'
import { toast } from 'react-toastify'

/** Tamaño máximo de archivo en bytes (100 KB) */
const MAX_FILE_SIZE = 100 * 1024

const initialErrors = {
  maxFileSize: ''
}

type UploadFileProps = {
  onChange?: (file: string, _version?: number) => void
  collaborator?: ACollaborator
}

/** https://www.npmjs.com/package/react-advanced-cropper */

const UploadFile = ({
  collaborator: collaboratorEdit,
  onChange
}: UploadFileProps) => {
  const [urlSigned, setUrlSigned] = useState<string>(
    collaboratorEdit?.photoUrl || ''
  )
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(initialErrors)
  const [uploadFile, removePhoto] = useCollaboratorStore((state) => [
    state.updatePhoto,
    state.removePhoto
  ])

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        maxFileSize: 'El archivo excede el tamaño máximo permitido (100 KB).'
      }))

      return
    }

    setLoading(true)
    const fileDetail = await uploadFile({
      id: collaboratorEdit?.id || '',
      _version: collaboratorEdit?._version || 0,
      file
    }).catch((error) => {
      showToastError(error)
      return null
    })

    if (!fileDetail) {
      setLoading(false)
      return
    }

    setErrors(initialErrors)
    setUrlSigned(fileDetail.urlSigned)

    if (typeof onChange === 'function') {
      onChange(fileDetail.urlSigned || '', fileDetail?._version)
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeFile = async () => {
    try {
      setLoading(true)

      const result = await removePhoto({
        urlSigned,
        id: collaboratorEdit?.id || '',
        _version: collaboratorEdit?._version || 0
      })

      if (typeof onChange === 'function') {
        onChange(result.urlSigned || '', result?._version)
      }

      setLoading(false)
      setUrlSigned('')
    } catch (error) {
      showToastError(error)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg']
    },
    multiple: false
  })

  return (
    <div className="flex flex-col items-center text-center">
      <div className="group/upload-file relative h-20 w-20" {...getRootProps()}>
        <input {...getInputProps()} />

        <Avatar
          showFallback={Boolean(!urlSigned)}
          src={urlSigned}
          className={clsx(
            'h-20 w-20 border-2 border-transparent text-large transition-all',
            {
              'border-primary': urlSigned,
              'group-hover/upload-file:cursor-pointer group-hover/upload-file:border-primary':
                !urlSigned
            }
          )}
          fallback={
            <VscDeviceCamera
              className="h-6 w-6 animate-pulse text-default-500 transition-all group-hover/upload-file:text-primary"
              fill="currentColor"
              size={20}
            />
          }
        />

        {(urlSigned || loading) && (
          <Button
            isLoading={loading}
            isIconOnly
            size="sm"
            color={urlSigned ? 'danger' : 'primary'}
            radius="full"
            className="absolute -right-3 bottom-0 z-10"
            onClick={removeFile}
          >
            {!loading && <VscTrash />}
          </Button>
        )}
      </div>

      {errors?.maxFileSize && (
        <div className="pt-unit-lg">
          <Text className="text-sm text-danger">{errors.maxFileSize}</Text>
        </div>
      )}
    </div>
  )
}

function showToastError(error: unknown) {
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

export default UploadFile
