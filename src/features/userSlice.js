import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
    },
    userLoggedOut: (state) => {
      state.user = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;
export const selectUserInfo = (state) => state.user.user;
export default userSlice.reducer;
