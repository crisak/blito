import type {
  AuthCognito,
  AuthSession,
  ReturnedPromiseResolvedType
} from '@/types'
import { Amplify, Auth } from 'aws-amplify'
import { getAwsExports } from 'blito-models'

type CognitoUserSession = ReturnedPromiseResolvedType<
  typeof Auth.currentSession
>

class AuthService {
  static getAuthData(data: CognitoUserSession): AuthSession {
    const userAuth = {
      id: data?.getIdToken().payload.sub,
      username: data?.getIdToken().payload['cognito:username'],
      locale: data?.getIdToken().payload.locale,
      picture: data?.getIdToken().payload.picture,
      name: data?.getIdToken().payload.name,
      nickname: data?.getIdToken().payload.nickname,
      email: data?.getIdToken().payload.email
    } as AuthSession

    return userAuth
  }

  static async getCurrentSession(): Promise<{
    status: boolean
    data: CognitoUserSession | null
  }> {
    try {
      await Auth.userAttributes
      const data = await Auth.currentSession()
      return { status: data.isValid(), data: data || null }
    } catch (error) {
      return { status: false, data: null }
    }
  }

  static async logout() {
    const { status } = await AuthService.getCurrentSession()

    if (status) {
      await Auth.signOut()
    }
  }

  static async login({
    username,
    password
  }: {
    username: string
    password: string
  }): Promise<AuthSession | null> {
    const auth: AuthCognito = await Auth.signIn(username, password)

    const userAuth = {
      id: auth.attributes.sub,
      username: auth.username,
      locale: auth.attributes.locale,
      picture: auth.attributes.picture,
      name: auth.attributes.name,
      nickname: auth.attributes.nickname,
      email: auth.attributes.email
    } as AuthSession

    const configAws = getAwsExports()

    Amplify.configure({
      ...configAws,
      ssr: true,
      API: {
        graphql_headers: async () => {
          return {
            'X-Blito-User-Id': userAuth.id,
            'Accept-Language': userAuth.locale,
            'Cache-Control':
              'no-store' /** TODO - This not working, make test */
          }
        }
      }
    })

    return userAuth
  }
}

export default AuthService
