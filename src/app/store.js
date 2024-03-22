import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../feature/Userslice";
import Adminslice from "../feature/Adminslice";


export const store = configureStore({
  reducer: {
    user:Userslice,
    admin:Adminslice, 
  },
});