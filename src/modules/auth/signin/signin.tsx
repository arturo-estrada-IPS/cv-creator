import { SyntheticEvent, useReducer } from "react";
import { Button, ButtonLink } from "../../../shared/widgets/buttons";
import { InputText } from "../../../shared/widgets/forms";
import { SigninAction, SigninActionTypes, SigninState } from "./types";

export function Signin() {
  const signinInitialState: SigninState = {
    email: "",
    password: "",
    formIsPristine: true,
    formIsValid: false,
  };

  const signinReducer = (
    state: SigninState,
    { type, value }: SigninAction
  ): SigninState => {
    switch (type) {
      case SigninActionTypes.SET_EMAIL:
        return { ...state, email: value, formIsPristine: false };
      case SigninActionTypes.SET_PASSWORD:
        return { ...state, password: value, formIsPristine: false };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(signinReducer, signinInitialState);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2" onSubmit={onSubmit}>
        <InputText
          label="Email"
          name="email"
          placeholder="example@domain.com"
          value={state.email}
          onChange={({ target }) => {
            dispatch({
              type: SigninActionTypes.SET_EMAIL,
              value: target.value,
            });
          }}
        />
        <InputText
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={({ target }) => {
            dispatch({
              type: SigninActionTypes.SET_PASSWORD,
              value: target.value,
            });
          }}
        />
        <div className="flex items-center justify-between mt-8">
          <Button type="submit" color="primary">
            Sign In
          </Button>
          <ButtonLink pathname="">Forgot Password?</ButtonLink>
        </div>
      </form>
    </div>
  );
}
