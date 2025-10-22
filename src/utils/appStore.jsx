import { configureStore } from "@reduxjs/toolkit";
import SideSlice from "./SideSlice";

const appStore = configureStore({
reducer:{
    hamstore: SideSlice,
}
})

export default appStore;