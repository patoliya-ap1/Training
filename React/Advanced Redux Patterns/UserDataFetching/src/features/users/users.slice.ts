import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../services/api";

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
  country: string;
}

export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  address: Address;
}

export interface InitialState {
  users: Users[] | null;
  usersState: "idle" | "loading" | "success" | "error";
  error: null | string;
}

const initialState: InitialState = {
  users: null,
  usersState: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (search: string | undefined) => {
    try {
      const response = await apiClient(
        `/users${search ? `/search?q=${search}` : ""}`,
      );
      return response.data.users;
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

const userSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersState = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersState = "success";
      const mapedUsers = action.payload.map(
        ({
          id,
          firstName,
          lastName,
          maidenName,
          age,
          gender,
          email,
          phone,
          username,
          password,
          birthDate,
          image,
          address,
        }: Users) => {
          return {
            id,
            firstName,
            lastName,
            maidenName,
            age,
            gender,
            email,
            phone,
            username,
            password,
            birthDate,
            image,
            address,
          };
        },
      );
      state.users = mapedUsers;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersState = "error";
      console.log(action.payload);
    });
  },
});

export default userSlice.reducer;
