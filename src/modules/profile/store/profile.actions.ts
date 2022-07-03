import { createAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/user.model";
import { ProfileActionsNames } from "./profile.state";

export const getProfile = createAction<void, ProfileActionsNames.GET_PROFILE>(
  ProfileActionsNames.GET_PROFILE
);

export const getProfileSuccess = createAction<
  UserModel,
  ProfileActionsNames.GET_PROFILE_SUCCESS
>(ProfileActionsNames.GET_PROFILE_SUCCESS);

export const getProfileError = createAction<
  string,
  ProfileActionsNames.GET_PROFILE_ERROR
>(ProfileActionsNames.GET_PROFILE_ERROR);

export const clearProfile = createAction<
  void,
  ProfileActionsNames.CLEAR_PROFILE
>(ProfileActionsNames.CLEAR_PROFILE);
