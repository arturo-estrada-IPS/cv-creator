import { ChangeEvent, SyntheticEvent, useReducer } from "react";
import { Button } from "../../../../shared/widgets/buttons";
import { InputText } from "../../../../shared/widgets/forms";
import { SignupAction, SignupActionsTypes, SignupState } from "./types";

export function Signup() {
  const initialState: SignupState = {
    name: "",
    email: "",
    password: "",
    formPristine: true,
    formValid: false,
  };

  const reducer = (
    state: SignupState,
    { type, value }: SignupAction
  ): SignupState => {
    switch (type) {
      case SignupActionsTypes.SET_EMAIL:
        return { ...state, email: value, formPristine: false };
      case SignupActionsTypes.SET_NAME:
        return { ...state, name: value, formPristine: false };
      case SignupActionsTypes.SET_PASSWORD:
        return { ...state, password: value, formPristine: false };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white pt-6 pb-4 mb-2" onSubmit={onSubmit}>
        <InputText
          label="Name"
          name="name"
          placeholder="John Doe"
          value={state.name}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: SignupActionsTypes.SET_NAME,
              value: target.value,
            });
          }}
        />
        <InputText
          label="Email"
          name="email"
          placeholder="example@domain.com"
          value={state.email}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: SignupActionsTypes.SET_EMAIL,
              value: target.value,
            });
          }}
        />
        <InputText
          label="Choose Password"
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: SignupActionsTypes.SET_PASSWORD,
              value: target.value,
            });
          }}
        />
        <div className=" flex justify-center items-center mt-8">
          <Button type="submit" color="primary">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}
