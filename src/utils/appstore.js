import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartslice"
import  userReducer  from "./userSlice";

const appstore= configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
    },
});

export default appstore;