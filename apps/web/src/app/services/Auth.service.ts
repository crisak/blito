'use client'

import { AuthCognito, ReturnedPromiseResolvedType, AuthSession } from '@/types'

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
    console.group('getCurrentSession')
    try {
      const data = await Auth.currentSession()
      return { status: true, data: data || null }
    } catch (error) {
      return { status: false, data: null }
    } finally {
      console.groupEnd()
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
    if (window?.localStorage === undefined) {
      return null
    }

    const { status } = await AuthService.getCurrentSession()

    if (!status) {
      await AuthService.logout()
    }

    let userAuth!: AuthSession

    const userStorage = window.localStorage.getItem(
      AuthService.STORAGE_KEY_AUTH
    )
    if (userStorage) {
      userAuth = JSON.parse(userStorage)
    }

    return userAuth
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

    Amplify.configure({
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
