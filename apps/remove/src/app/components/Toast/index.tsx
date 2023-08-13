'use client'
import { createContext } from 'react'
import { ToastContainer } from 'react-toastify'

const ContextToast = createContext({})

type ToastProviderProps = { children: React.ReactElement }
const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <ContextToast.Provider value={{}}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </ContextToast.Provider>
  )
}

// export const useToast = () => ContextToast.

export default ToastProvider
