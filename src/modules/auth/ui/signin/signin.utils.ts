import { SigninAction, SigninActionTypes, SigninState } from "./types";

export const signinInitialState: SigninState = {
  formData: {
    email: "",
    password: "",
  },
  formIsPristine: true,
  formIsValid: false,
  spinnerActive: false,
  formErrors: {},
  requestError: "",
};

export const signinReducer = (
  state: SigninState,
  { type, value, errorObj = { name: "", message: "" } }: SigninAction
): SigninState => {
  switch (type) {
    case SigninActionTypes.SET_EMAIL:
      return {
        ...state,
        formData: { ...state.formData, email: value as string },
        formIsPristine: false,
      };

    case SigninActionTypes.SET_PASSWORD:
      return {
        ...state,
        formData: { ...state.formData, password: value as string },
        formIsPristine: false,
      };

    case SigninActionTypes.SET_FORM_VALID:
      return { ...state, formIsValid: value as boolean };

    case SigninActionTypes.SET_SPINNER_VALUE:
      return { ...state, spinnerActive: value as boolean };

    case SigninActionTypes.SET_FORM_ERROR:
      return {
        ...state,
        formErrors: { ...state.formErrors, [errorObj.name]: errorObj.message },
      };

    case SigninActionTypes.SET_REQUEST_ERROR:
      return { ...state, requestError: value as string };

    case SigninActionTypes.RESET:
      return signinInitialState;

    default:
      return { ...state };
  }
};
