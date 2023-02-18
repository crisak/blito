export const Regex = {
  password: /^(?=.*[0-9])(?=.*[A-zñ!@#$%^&*])([A-z0-9ñ!@#$%^&*]+)$/,
  /** This Regex to do match with the config Cognito */
  phoneNumberCognito: /^[+][0-9]{7,20}$/,
};
