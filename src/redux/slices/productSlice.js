import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";
const productSlice = createSlice({
  name: "products",
  initialState: { items: products },
  reducers: {},
});
export const selectProducts = (state) => state.products.items;
export default productSlice.reducer;
