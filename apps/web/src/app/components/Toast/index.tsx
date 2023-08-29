'use client'

import { ToastContainer } from 'react-toastify'

type ToastProviderProps = { children: React.ReactElement }
const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default ToastProvider
