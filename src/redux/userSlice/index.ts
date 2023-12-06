import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggin: state => {
      state.logged = true;
    },
    logout: state => {
      state.logged = false;
    },
  },
});

export const { loggin, logout } = userSlice.actions;

export default userSlice.reducer;
