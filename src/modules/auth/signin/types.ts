export interface SigninState {
  email: string;
  password: string;
  formIsPristine: boolean;
  formIsValid: boolean;
}

export enum SigninActionTypes {
  SET_EMAIL = "setEmail",
  SET_PASSWORD = "setPassword",
  SET_FORM_PRISTINE = "setFormPristine",
  SET_FORM_VALID = "setFormValid",
}

export interface SigninAction {
  type: SigninActionTypes;
  value: string;
}
