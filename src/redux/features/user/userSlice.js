import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    email: "",
  },

  reducers: {
    store: (state, action) => {
      state = action.payload;
    },

    remove: (state, action) => {},
  },
});

export const { store, remove } = userSlice.actions;

export default userSlice.reducer;
