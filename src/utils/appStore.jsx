import { configureStore } from "@reduxjs/toolkit";
import cartsliceReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartsliceReducer,
  },
});
export default appStore;
