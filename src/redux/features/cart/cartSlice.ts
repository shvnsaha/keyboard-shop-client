import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: TCartItem[];
  count: number;
};

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const orderPayload = {
        _id: action.payload._id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
        image: action.payload.image,
      };

      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(orderPayload);
      }
    },
    increaseCart: (state, action: PayloadAction<TCartItem>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseCart: (state, action: PayloadAction<TCartItem>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },

    cartCount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        // eslint-disable-next-line no-self-assign
        state.count = state.count;
      } else {
        state.count = state.count + 1;
      }
    },

    deleteItem: (state, action: PayloadAction<TCartItem>) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addToCart, clearCart, cartCount, increaseCart, decreaseCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
