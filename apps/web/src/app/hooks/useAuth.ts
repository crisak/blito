'use client'
import AuthService from '@/app/services/Auth.service'
import { Amplify } from 'aws-amplify'
import { getAwsExports } from 'blito-models'
import store from '@/redux/store'
import { authSliceActions } from '@/redux/slices'

/** This should be configured on Client side but not in the Server */
const configAws = getAwsExports()
Amplify.configure({
  ...configAws,
  ssr: true,
  API: {
    graphql_headers: async () => {
      return {
        'Accept-Language': 'es-CO'
      }
    }
  }
})

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
