import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    toggleWishlist: (state, action) => {
      const id = action.payload.id;
      const exists = state.items.some((item) => item.id === id);
      state.items = exists
        ? state.items.filter((item) => item.id !== id)
        : [...state.items, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export default wishlistSlice.reducer;
