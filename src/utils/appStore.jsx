import { configureStore } from "@reduxjs/toolkit";
import SideSlice from "./SideSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
reducer:{
    hamstore: SideSlice,
    search: searchSlice,
    chat: chatSlice,
}
})

export default appStore;