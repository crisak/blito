export default interface AuthCognito {
  username: string
  pool: Pool
  Session: null
  client: Client
  signInUserSession: SignInUserSession
  authenticationFlowType: string
  storage: Storage
  keyPrefix: string
  userDataKey: string
  attributes: Attributes
  preferredMFA: string
}

export interface Attributes {
  sub: string
  email_verified: boolean
  gender: string
  phone_number_verified: boolean
  locale: string
  picture: string
  updated_at: string
  name: string
  nickname: string
  phone_number: string
  email: string
}

export interface Client {
  endpoint: string
  fetchOptions: FetchOptions
}

export interface FetchOptions {}

export interface Pool {
  userPoolId: string
  clientId: string
  client: Client
  advancedSecurityDataCollectionFlag: boolean
  storage: Storage
}

export interface Storage {
  cookies: StorageCookies
  store: Store
}

export interface StorageCookies {
  changeListeners: any[]
  HAS_DOCUMENT_COOKIE: boolean
  cookies: CookiesCookies
}

export interface CookiesCookies {
  _ga: string
  _ga_KYCFHCJLM5: string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.LastAuthUser': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.idToken': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.accessToken': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.refreshToken': string
}

export interface Store {
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.3b5b49f2-837a-44d0-8c5d-3a2e2b52e68a.idToken': string
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.3b5b49f2-837a-44d0-8c5d-3a2e2b52e68a.refreshToken': string
  'amplify-signin-with-hostedUI': string
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.3b5b49f2-837a-44d0-8c5d-3a2e2b52e68a.userData': string
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.3b5b49f2-837a-44d0-8c5d-3a2e2b52e68a.clockDrift': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.idToken': string
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.3b5b49f2-837a-44d0-8c5d-3a2e2b52e68a.accessToken': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.LastAuthUser': string
  'CognitoIdentityServiceProvider.2nc2llfm0dafa59pvc5r2f71sa.LastAuthUser': string
  _ga_KYCFHCJLM5: string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.clockDrift': string
  _ga: string
  auth: string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.accessToken': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.refreshToken': string
  'CognitoIdentityServiceProvider.6lqsabor4lo6hogkllpak4sed0.40e8b4b5-477a-4037-9eeb-f4687ba405e4.userData': string
  'ally-supports-cache': string
}

export interface SignInUserSession {
  idToken: IDToken
  refreshToken: RefreshToken
  accessToken: AccessToken
  clockDrift: number
}

export interface AccessToken {
  jwtToken: string
  payload: AccessTokenPayload
}

export interface AccessTokenPayload {
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

export interface IDToken {
  jwtToken: string
  payload: IDTokenPayload
}

export interface IDTokenPayload {
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

export interface RefreshToken {
  token: string
}
