export interface SigninState {
  formData: SigninFormData;
  formIsPristine: boolean;
  formIsValid: boolean;
  spinnerActive: boolean;
  formErrors?: { [name: string]: string };
  requestError?: string;
}

export interface SigninFormData {
  email: string;
  password: string;
}

export enum SigninActionTypes {
  SET_EMAIL = "setEmail",
  SET_PASSWORD = "setPassword",
  SET_FORM_PRISTINE = "setFormPristine",
  SET_FORM_VALID = "setFormValid",
  SET_SPINNER_VALUE = "setSpinnerValue",
  SET_REQUEST_ERROR = "setRequestError",
  SET_FORM_ERROR = "setFormError",
  RESET = "reset",
}

export interface SigninAction {
  type: SigninActionTypes;
  value: string | boolean;
  errorObj?: { name: string; message: string };
}
