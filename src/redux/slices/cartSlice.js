import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(
        (i) =>
          i.id === item.id && i.size === item.size && i.color === item.color,
      );
      if (existing) existing.quantity += item.quantity || 1;
      else state.items.push({ ...item, quantity: item.quantity || 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.cartId !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.cartId === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.cartId === action.payload);
      if (item)
        item.quantity > 1
          ? (item.quantity -= 1)
          : (state.items = state.items.filter(
              (i) => i.cartId !== action.payload,
            ));
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;
