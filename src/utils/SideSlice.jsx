import { createSlice } from "@reduxjs/toolkit";

const SideSlice = createSlice({

    name: 'hamstore',
    initialState: {
        isMenuToggle: true,
    },
    
    reducers:{
        MenuToggle: (state) => {
            state.isMenuToggle = !state.isMenuToggle;
        }
    },
})

export const {MenuToggle} = SideSlice.actions;


export default SideSlice.reducer;