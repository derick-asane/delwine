import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isloading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
