'use client'

import { Text } from '@/app/shared/ui'
import { LogUtil } from '@/utils'
import { Avatar, Button } from '@nextui-org/react'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { VscDeviceCamera, VscTrash } from 'react-icons/vsc'

/** Tamaño máximo de archivo en bytes (100 KB) */
const MAX_FILE_SIZE = 100 * 1024

const initialErrors = {
  maxFileSize: ''
}

type UploadFileProps = {
  onChange?: (file: File) => void
  file?: File | null
}

/** https://www.npmjs.com/package/react-advanced-cropper */
const UploadFile = ({ onChange, file: fileProp }: UploadFileProps) => {
  const [file, setFile] = useState<File | null>(fileProp || null)
  const [errors, setErrors] = useState(initialErrors)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    LogUtil.debug('onDrop', file)

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        maxFileSize: 'El archivo excede el tamaño máximo permitido (100 KB).'
      }))

      return
    }

    setErrors(initialErrors)
    setFile(file)
    if (typeof onChange === 'function') {
      onChange(file)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeFile = () => {
    setFile(null)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg']
    },
    multiple: false
    // noDrag: true
  })

  return (
    <div className="flex flex-col items-center text-center">
      <div className="group/upload-file relative h-20 w-20" {...getRootProps()}>
        <input {...getInputProps()} />

        <Avatar
          showFallback={Boolean(file)}
          src={file ? URL.createObjectURL(file) : undefined}
          className={clsx(
            'h-20 w-20 border-2 border-transparent text-large transition-all',
            {
              'border-primary': file,
              'group-hover/upload-file:cursor-pointer group-hover/upload-file:border-primary':
                !file
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

        {file && (
          <Button
            isIconOnly
            size="sm"
            color="danger"
            radius="full"
            className="absolute -right-3 bottom-0 z-10"
            onClick={removeFile}
          >
            <VscTrash />
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

export default UploadFile
