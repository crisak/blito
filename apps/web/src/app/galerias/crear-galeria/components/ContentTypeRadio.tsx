'use client'

import {
  cn,
  RadioGroup,
  RadioProps,
  useRadio,
  VisuallyHidden
} from '@nextui-org/react'

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps
  } = useRadio(props)

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex flex-row-reverse items-center justify-between hover:bg-content2',
        'cursor-pointer gap-4 rounded-lg border-2 border-default p-4',
        'data-[selected=true]:border-primary',
        'w-full sm:w-auto'
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  )
}

function ContentTypeRadio() {
  return (
    <RadioGroup
      label="Tipo de galería"
      orientation="horizontal"
      classNames={{
        wrapper: 'flex gap-unit-lg'
      }}
    >
      <CustomRadio description="Crear una galería de fotos" value="GALLERY">
        Galería
      </CustomRadio>
      <CustomRadio
        description="Crea un proyecto con un nombre y una descripción"
        value="PROJECT"
      >
        Proyecto
      </CustomRadio>
    </RadioGroup>
  )
}

export default ContentTypeRadio
