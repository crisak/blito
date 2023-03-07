/* eslint-disable no-console */
import { useEffect } from 'react'
import { Button } from 'ui'

export default function Docs() {
  const defaultParams = process.env.NEXT_PUBLIC_ENV as string
  useEffect(() => {
    console.log('ENV->>>', process.env.NEXT_PUBLIC_ENV_TEST as string)
    console.log('NODE_ENV->>', process.env.NODE_ENV as string)
  }, [])
  return (
    <div>
      <h1>Docs</h1>
      <p>Ambiente {defaultParams}</p>
      <Button />
    </div>
  )
}
