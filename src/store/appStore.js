import { configureStore } from "@reduxjs/toolkit";
import organiseReducer from './organiseSlice';
const appStore=configureStore({
    reducer:{
        organise:organiseReducer,
    }
})
export default appStore;