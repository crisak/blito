'use client'

import { Text } from '@/app/shared/ui'
import { FilesUtil, LogUtil } from '@/utils'
import { Avatar, Button } from '@nextui-org/react'
import { Storage } from 'aws-amplify'
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
  onChange?: (file: string) => void
  defaultValue?: string
  userId?: string
}

const pathFileAvatar = 'avatar-images'

/** https://www.npmjs.com/package/react-advanced-cropper */
// const UploadFile = ({ onChange, defaultValue, value }: UploadFileProps) => {
const fileId = Date.now().toString()

const UploadFile = ({ defaultValue, onChange, userId }: UploadFileProps) => {
  const [urlSigned, setUrlSigned] = useState<string>(defaultValue || '')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(initialErrors)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    LogUtil.debug('onDrop', file)

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        maxFileSize: 'El archivo excede el tamaño máximo permitido (100 KB).'
      }))

      return
    }

    setLoading(true)

    const extension = getExtension(file.name)

    const name = `${userId || fileId}.${extension}`
    const pathFileName = `${pathFileAvatar}/${name}`

    const result = await Storage.put(pathFileName, file, {
      level: 'public',
      contentType: file?.type
    }).catch((error) => {
      LogUtil.debug('Blob file', file)

      LogUtil.errorDetail('Error upload to s3', error, {
        pathName: pathFileName,
        level: 'public',
        contentType: file?.type
      })

      showToastError(error)
      return { key: '' }
    })

    if (!result.key) {
      setLoading(false)
      return
    }

    const urlSigned = await Storage.get(result.key, {
      level: 'public',
      validateObjectExistence: true
    }).catch((error) => {
      LogUtil.errorDetail('Error get url signed', error, {
        key: result.key,
        level: 'public'
      })

      return ''
    })

    setErrors(initialErrors)
    setUrlSigned(urlSigned)

    if (typeof onChange === 'function') {
      onChange(urlSigned)
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeFile = async () => {
    setLoading(true)

    await Storage.remove(FilesUtil.getKey(urlSigned), {
      level: 'public'
    }).catch((error) => {
      LogUtil.errorDetail('Error remove file', error, {
        key: urlSigned,
        level: 'public'
      })

      showToastError(error)
    })

    setLoading(false)
    setUrlSigned('')
    if (typeof onChange === 'function') {
      onChange('')
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

function getExtension(name: string) {
  const partesDelNombre = name.split('.') || []
  if (partesDelNombre.length > 1) {
    return partesDelNombre.pop()?.toLowerCase()
  } else {
    return ''
  }
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
