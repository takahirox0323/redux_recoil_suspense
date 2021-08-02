import { createSlice } from "@reduxjs/toolkit";

export interface User {
  email: string;
  point: number;
}

export type UserState = {
  user: User;
  auth: {
    isSignedIn: boolean;
    token: string;
  };
};

const initialState: UserState = {
  user: {
    email: "test@gmail.com",
    point: 0,
  },
  auth: {
    isSignedIn: false,
    token: "null",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addCount: (state) => {
      state.user.point += 1;
    },
    login: (state) => {
      state.auth.isSignedIn = true;
    },
  },
});

export const { login, addCount } = userSlice.actions;
export const userReducer = userSlice.reducer;
