import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      const itemIdToRemove = action.payload.itemId;
      state.items = state.items.filter(item => item.card.info.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.card.info.id === itemId);

      if (itemIndex !== -1) { // Corrected condition
        // Check if the new quantity is greater than 0 before updating
        if (newQuantity > 0) {
          state.items[itemIndex].quantity = newQuantity;
        } else {
          // Remove the item from the cart if the quantity is 0
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItems, removeItems, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;


