export default interface AuthCognito {
  username: string;
  pool: Pool;
  Session: null;
  client: Client;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: any;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;
}

interface Attributes {
  sub: string;
  'custom:stores': string;
  email_verified: boolean;
  'custom:vtexId': string;
  'custom:apiKey': string;
  'custom:schedule': string;
  email: string;
}

interface Client {
  endpoint: string;
  fetchOptions: any;
}

interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: any;
}

interface SignInUserSession {
  idToken: IDToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}

interface AccessToken {
  jwtToken: string;
  payload: AccessTokenPayload;
}

interface AccessTokenPayload {
  sub: string;
  'cognito:groups': string[];
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

interface IDToken {
  jwtToken: string;
  payload: IDTokenPayload;
}

interface IDTokenPayload {
  sub: string;
  'cognito:groups': string[];
  email_verified: boolean;
  'custom:schedule': string;
  iss: string;
  'cognito:username': string;
  origin_jti: string;
  aud: string;
  'custom:stores': string;
  event_id: string;
  token_use: string;
  'custom:vtexId': string;
  auth_time: number;
  'custom:apiKey': string;
  exp: number;
  iat: number;
  jti: string;
  email: string;
}

interface RefreshToken {
  token: string;
}
