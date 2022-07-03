import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export const selectUserProfileState = createSelector(
  (state: RootState) => state.profile,
  (result) => result
);

export const selectUserProfile = createSelector(
  selectUserProfileState,
  (result) => result.entity
);

export const selectProfileSpin = createSelector(
  selectUserProfileState,
  (result) => result.loading
);

export const selectProfileErrors = createSelector(
  selectUserProfileState,
  (result) => result.errors
);
