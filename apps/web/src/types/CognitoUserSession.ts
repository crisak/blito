export default interface CognitoUserSession {
  idToken: IDToken
  refreshToken: RefreshToken
  accessToken: AccessToken
  clockDrift: number
}

interface AccessToken {
  jwtToken: string
  payload: AccessTokenPayload
}

interface AccessTokenPayload {
  sub: string
  'cognito:groups': string[]
  iss: string
  client_id: string
  origin_jti: string
  event_id: string
  token_use: string
  scope: string
  auth_time: number
  exp: number
  iat: number
  jti: string
  username: string
}

interface IDToken {
  jwtToken: string
  payload: IDTokenPayload
}

interface IDTokenPayload {
  sub: string
  'cognito:groups': string[]
  gender: string
  'cognito:preferred_role': string
  iss: string
  locale: string
  'cognito:roles': string[]
  updated_at: number
  auth_time: number
  nickname: string
  exp: number
  iat: number
  jti: string
  email: string
  email_verified: boolean
  phone_number_verified: boolean
  'cognito:username': string
  picture: string
  origin_jti: string
  aud: string
  event_id: string
  token_use: string
  name: string
  phone_number: string
}

interface RefreshToken {
  token: string
}
