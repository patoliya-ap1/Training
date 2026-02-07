import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/api";
import type { Profile } from "./Type";

interface InitialState {
  user: Profile | null;
  userState: "idle" | "loading" | "success" | "error";
  error: null | string;
}

const initialState: InitialState = {
  user: null,
  userState: "idle",
  error: null,
};

export const fetchProfile = createAsyncThunk(
  "fetch/profile",
  async (userId: string | undefined) => {
    try {
      const response = await apiClient(`/user/${userId}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        console.error("Caught an unknown type of error:", error);
      }
      return "unknown error while fetching users";
    }
  },
);

const profileSlice = createSlice({
  name: "profileState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.userState = "loading";
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.userState = "success";
      state.user = action.payload;
    });
    builder.addCase(fetchProfile.rejected, (state) => {
      state.userState = "error";
    });
  },
});

export default profileSlice.reducer;
