import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
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
        if (existingItem.quantity === action.payload.quantity) {
          throw new Error("Nope");
        }

        existingItem.quantity += 1;
      } else {
        state.items.push(orderPayload);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },

    cartCount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );

      if (existingItem) {
        // eslint-disable-next-line no-self-assign
        state.count = state.count;
      } else {
        state.count = state.count + 1;
      }
    },
  },
});

export const { addToCart, clearCart, cartCount } = cartSlice.actions;

export default cartSlice.reducer;
