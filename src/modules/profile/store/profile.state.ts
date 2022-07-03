import { UserModel } from "../models/user.model";

export interface ProfileState {
  entity: UserModel;
  loading: boolean;
  errors: string[];
}

export interface ProfileAction {
  type: string;
  payload: UserModel;
}

export enum ProfileActionsNames {
  GET_PROFILE = "[PROFILE] Get Profile",
  GET_PROFILE_SUCCESS = "[PROFILE] Get Profile SUCCESS",
  GET_PROFILE_ERROR = "[PROFILE] Get Profile ERROR",
  CLEAR_PROFILE = "[PROFILE] CLEAR",
}

export const profileInitialState: ProfileState = {
  entity: {
    uid: "",
    email: "",
    displayName: "",
    phoneNumber: "",
    photoURL: "",
    emailVerified: false,
  },
  loading: false,
  errors: [],
};
