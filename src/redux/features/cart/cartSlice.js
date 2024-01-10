import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      console.log(state.value.push(action.payload));
    },
    remove: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
