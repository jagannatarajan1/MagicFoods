import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        console.log(current(state.items));
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
        console.log(current(state));
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        console.log("hshshshh");
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.card.info.id
          );
        }
      }
    },
    clearCartItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
