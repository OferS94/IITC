import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }else {
        existingItem.quantity += action.payload.quantity
        existingItem.totalItemPrice += action.payload.totalItemPrice
      }
      state.totalQuantity += action.payload.quantity
      state.totalPrice += action.payload.totalItemPrice
    },
    removeItem: (state, action) => {
      //1. find item index
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      //2.filter said index
      const item = state.items[itemIndex];
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price;
      state.items.splice(item, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
