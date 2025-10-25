import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        message: [],
    },
    reducers:{
        addMessage: (state, action) => {
            state.message.splice(CHAT_COUNT,1);
            state.message.push(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;