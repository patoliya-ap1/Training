import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/users.slice";
import profileReducer from "../features/Profile/profile.slice";

export const store = configureStore({
  reducer: {
    usersState: userReducer,
    profileState: profileReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
