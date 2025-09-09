import {configureStore} from "@reduxjs/toolkit";
import {red} from "./slice.js";

let mystore=configureStore({
    reducer:red
})


export default mystore