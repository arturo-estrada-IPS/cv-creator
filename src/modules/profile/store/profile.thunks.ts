import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserModel } from "../models/user.model";
import { ProfileService } from "../services/profile.service";
import { getProfileError, getProfileSuccess } from "./profile.actions";
import { ProfileActionsNames } from "./profile.state";

const profileAPI = new ProfileService();

export const getUserProfileAPI = createAsyncThunk<UserModel, string>(
  ProfileActionsNames.GET_PROFILE,
  async (uid, { dispatch }) => {
    return profileAPI
      .getCurrentUser(uid)
      .then((profile) => {
        dispatch(getProfileSuccess(profile));
        return profile;
      })
      .catch((error) => {
        const { message } = error;
        dispatch(getProfileError(message));
        throw error;
      });
  }
);
