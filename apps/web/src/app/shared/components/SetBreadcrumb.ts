'use client'

import { useBreadcrumbStore } from '@/store'
import { useEffect } from 'react'

type SetBreadcrumbProps = { params: Array<{ key: string; value: string }> }

const SetBreadcrumb = ({ params }: SetBreadcrumbProps) => {
  const setBreadcrumb = useBreadcrumbStore((state) => state.set)

  useEffect(() => {
    params.forEach(({ key, value }) => {
      setBreadcrumb(key, value)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default SetBreadcrumb
