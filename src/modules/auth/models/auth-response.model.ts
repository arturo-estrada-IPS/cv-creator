export interface AuthResponseModel {
  uuid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  stsTokenManager: {
    accessToken: string;
    expirationTime: string;
    refreshToken: string;
  };
  [key: string]: string | number | boolean | object;
}
