import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    values: [],
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      state.values.push(action.payload);

      state.count = state.values.reduce((acc, product) => {
        product = JSON.parse(JSON.stringify(product));

        return acc + product.quantity;
      }, 0);
    },

    remove: (state, action) => {
      state.values = action.payload
        ? state.values.splice(action.payload, 1)
        : [...state.values.splice(1)];

      state.count = state.values.reduce((acc, product) => {
        product = JSON.parse(JSON.stringify(product));

        return acc + product.quantity;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
