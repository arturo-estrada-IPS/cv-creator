export type SignupState = {
  name: string;
  email: string;
  password: string;
  formPristine: boolean;
  formValid: boolean;
};

export enum SignupActionsTypes {
  SET_NAME = "setName",
  SET_EMAIL = "setEmail",
  SET_PASSWORD = "setPassword",
}

export interface SignupAction {
  type: SignupActionsTypes;
  value: string;
}
