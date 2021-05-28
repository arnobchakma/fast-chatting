import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = 1;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  
}),



export const {login, logout} = userSlice.action;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;