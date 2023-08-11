'use client'

import { useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import { useContext, createContext } from 'react'
import Alert, { type StateAlert } from './Alert'

const initialState = {
  show: (_: ParamsShowAlert) => {},
  confirm: (_: ParamsConfirmAlert) => {}
}

const AlertContext = createContext(initialState)

type ParamsShowAlert = Pick<
  StateAlert,
  'title' | 'body' | 'messageButtonAccept' | 'messageButtonCancel'
>

type ParamsConfirmAlert = ParamsShowAlert & {
  asyncFn: () => Promise<boolean> /** If return true then close modal else the modal is open */
}

export type AlertProviderProps = {
  children: React.ReactNode
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const bindings = useDisclosure()

  const [stateAlert, setStateAlert] = useState<
    Omit<StateAlert, 'setResponseConfirm'>
  >({
    type: 'INFO',
    title: '',
    body: '',
    responseConfirm: false,
    messageButtonAccept: '',
    messageButtonCancel: '',
    asyncFn: async () => false
  })

  const show = (parameterShow: ParamsShowAlert) => {
    setStateAlert((prevProps) => ({
      ...prevProps,
      ...parameterShow,
      type: 'INFO'
    }))
    bindings.onOpen()
  }

  const confirm = (parameterShow: ParamsConfirmAlert) => {
    setStateAlert((prevProps) => ({
      ...prevProps,
      ...parameterShow,
      type: 'CONFIRM'
    }))
    bindings.onOpen()
  }

  return (
    <>
      <AlertContext.Provider value={{ show, confirm }}>
        {children}
        <Alert
          {...{
            bindings,
            ...stateAlert
          }}
        />
      </AlertContext.Provider>
    </>
  )
}

export const useAlert = () => useContext(AlertContext)

export default AlertProvider
