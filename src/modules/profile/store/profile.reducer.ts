import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/user.model";
import {
  clearProfile,
  getProfile,
  getProfileError,
  getProfileSuccess,
} from "./profile.actions";
import { profileInitialState } from "./profile.state";

export const profileSlice = createSlice({
  name: "profile",
  initialState: profileInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProfile, (state) => {
        state.loading = true;
      })
      .addCase(getProfileSuccess, (state, action: PayloadAction<UserModel>) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(getProfileError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.errors = state.errors.concat(action.payload);
      })
      .addCase(clearProfile, (state) => {
        state = profileInitialState;
      });
  },
});

export const profileReducer = profileSlice.reducer;
