'use client'

import { AuthCognito, ReturnedPromiseResolvedType, AuthSession } from '@/types'
import { getAwsExports } from 'blito-models'
import { Amplify } from 'aws-amplify'

type CognitoUserSession = ReturnedPromiseResolvedType<
  typeof Auth.currentSession
>

import { Auth } from 'aws-amplify'

class AuthService {
  static STORAGE_KEY_AUTH = 'auth'

  static async getCurrentSession(): Promise<{
    status: boolean
    data: CognitoUserSession | null
  }> {
    try {
      const data = await Auth.currentSession()
      return { status: true, data: data || null }
    } catch (error) {
      return { status: false, data: null }
    }
  }

  static async logout() {
    if (window?.localStorage === undefined) {
      return null
    }

    const { status } = await AuthService.getCurrentSession()

    if (status) {
      await Auth.signOut()
    }

    window.localStorage.removeItem(AuthService.STORAGE_KEY_AUTH)
  }

  static async setLoginData(): Promise<AuthSession | null> {
    try {
      if (window?.localStorage === undefined) {
        return null
      }

      const { status } = await AuthService.getCurrentSession()

      if (!status) {
        await AuthService.logout()
        return null
      }

      const userStorage = window.localStorage.getItem(
        AuthService.STORAGE_KEY_AUTH
      )

      if (!userStorage) {
        await AuthService.logout()
        return null
      }

      return JSON.parse(userStorage)
    } catch (error) {
      console.error('🚨 setLoginData: ', error)
      throw error
    }
  }

  static async login({
    username,
    password
  }: {
    username: string
    password: string
  }): Promise<AuthSession | null> {
    if (window?.localStorage === undefined) {
      return null
    }

    const auth: AuthCognito = await Auth.signIn(username, password)

    const userAuth = {
      id: auth.attributes.sub,
      username: auth.username,
      locale: auth.attributes.locale,
      picture: auth.attributes.picture,
      name: auth.attributes.name,
      nickname: auth.attributes.nickname
    } as AuthSession

    const configAws = getAwsExports()

    Amplify.configure({
      ...configAws,
      ssr: true,
      API: {
        graphql_headers: async () => {
          return {
            'Accept-Language': userAuth.locale
          }
        }
      }
    })

    localStorage.setItem(
      AuthService.STORAGE_KEY_AUTH,
      JSON.stringify(userAuth, null, 2)
    )

    return userAuth
  }
}

export default AuthService
