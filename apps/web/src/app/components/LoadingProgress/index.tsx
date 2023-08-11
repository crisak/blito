'use client'

import { Box } from '@/app/shared/ui'
import { Progress } from '@nextui-org/react'

const LoadingProgress = () => {
  return (
    <Box>
      <Progress
        isIndeterminate
        size="sm"
        isStriped
        value={50}
        color="primary"
      />
    </Box>
  )
}

export default LoadingProgress
