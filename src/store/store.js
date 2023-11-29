import { configureStore } from "@reduxjs/toolkit";
import ngoReducer from "./slices/ngoSlice";
const store=configureStore({reducer:ngoReducer})
export default store