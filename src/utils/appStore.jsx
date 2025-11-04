import { configureStore } from "@reduxjs/toolkit";
import SideSlice from "./SideSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
reducer:{
    hamstore: SideSlice,
    search: searchSlice,
    chat: chatSlice,
    video: videoSlice,
}
})

export default appStore;