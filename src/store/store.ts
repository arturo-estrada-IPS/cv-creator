import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "../modules/profile";

const reducer = {
  profile: profileReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
