/* eslint-disable no-console */
'use client'

import { useEffect, useRef, useState } from 'react'

const debounce = (func: Function, wait: number, immediate = false) => {
  let timeout: ReturnType<typeof setTimeout> | null

  return function executedFunction(...args: any[]) {
    // @ts-ignore
    const context = this

    const later = () => {
      timeout = null

      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout as ReturnType<typeof setTimeout>)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

type ScrollHeaderProps = Omit<
  React.ComponentPropsWithoutRef<'header'>,
  'children'
> & {
  scrollThreshold?: number
  children: (value: {
    scrollTop: { current: number; previous: number }
    scrollThreshold: number
    currentHeight: number
  }) => React.ReactNode
}

const ScrollHeader = ({
  children,
  scrollThreshold = 500,
  ...headerProps
}: ScrollHeaderProps) => {
  const [scrollTop, setScrollTop] = useState({ current: 0, previous: 0 })
  const refHeader = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScrollHeaderGallery = (event: Event) => {
      // @ts-ignore
      const scrollTop = event?.target?.scrollTop ?? 0

      setScrollTop((prevValue) => ({
        previous: prevValue.current,
        current: scrollTop
      }))
    }

    // apply debounce function to handleScrollHeaderGallery
    const debounceHandleScrollHeaderGallery = debounce(
      handleScrollHeaderGallery,
      100
    )

    // Agregar el oyente de desplazamiento cuando el componente se monta
    const element = document?.getElementById('body-container')

    element?.addEventListener('scroll', debounceHandleScrollHeaderGallery)

    // Eliminar el oyente de desplazamiento cuando el componente se desmonta
    return () => {
      // eslint-disable-next-line no-console
      const elementDestroy = document?.getElementById('body-container')

      elementDestroy?.removeEventListener(
        'scroll',
        debounceHandleScrollHeaderGallery
      )
    }
  }, [])

  const heightHeader = refHeader?.current?.clientHeight ?? 0

  return (
    <header ref={refHeader} {...headerProps}>
      {children({
        scrollTop,
        scrollThreshold,
        currentHeight: heightHeader
      })}
    </header>
  )
}

export default ScrollHeader
