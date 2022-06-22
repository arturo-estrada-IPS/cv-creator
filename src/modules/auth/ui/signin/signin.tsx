import { SyntheticEvent, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { HttpErrorResponse } from "../../../../shared/core";
import { Alert } from "../../../../shared/widgets/alerts";
import { Button, ButtonLink } from "../../../../shared/widgets/buttons";
import { InputText } from "../../../../shared/widgets/forms";
import { signin } from "../../services";
import { signinInitialState, signinReducer } from "./signin.utils";
import { SigninActionTypes } from "./types";

export function Signin() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(signinReducer, signinInitialState);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: SigninActionTypes.SET_SPINNER_VALUE, value: true });

    const { email, password } = state.formData;

    signin(email, password)
      .then(() => {
        dispatch({ type: SigninActionTypes.SET_SPINNER_VALUE, value: false });
        navigate("/dashboard", { replace: true });
      })
      .catch(({ message }: HttpErrorResponse) => {
        dispatch({ type: SigninActionTypes.SET_SPINNER_VALUE, value: false });
        dispatch({ type: SigninActionTypes.SET_REQUEST_ERROR, value: message });
      });
  };

  const formIsValid = () => {
    const { email, password } = state.formData;
    return email.length > 0 && password.length > 0;
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2" onSubmit={onSubmit}>
        {state.requestError && (
          <Alert
            color="danger"
            onDismiss={() => {
              dispatch({
                type: SigninActionTypes.SET_REQUEST_ERROR,
                value: false,
              });
            }}
          >
            {state.requestError || ""}
          </Alert>
        )}
        <InputText
          label="Email"
          name="email"
          placeholder="example@domain.com"
          value={state.formData.email}
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
          value={state.formData.password}
          onChange={({ target }) => {
            dispatch({
              type: SigninActionTypes.SET_PASSWORD,
              value: target.value,
            });
          }}
        />
        <div className="flex items-center justify-between mt-8">
          <Button type="submit" color="primary" disabled={!formIsValid()}>
            {state.spinnerActive ? "Signing in..." : "Sign In"}
          </Button>
          <ButtonLink pathname="">Forgot Password?</ButtonLink>
        </div>
      </form>
    </div>
  );
}
