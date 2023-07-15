'use client'
import AuthService from '@/app/shared/services/Auth.service'
import store from '@/redux/store'
import { authSliceActions } from '@/redux/slices'

const useAuth = () => {
  const initAuth = async () => {
    const userAuth = await AuthService.setLoginData()

    if (userAuth) {
      store.dispatch(authSliceActions.login(userAuth))
      return
    }

    store.dispatch(authSliceActions.logout())
  }

  return { initAuth }
}

export default useAuth
