import { createSlice } from "@reduxjs/toolkit";

const SideSlice = createSlice({

    name: "hamstore",
    initialState: {
        isMenuToggle: true,
    },
    
    reducers:{
        MenuToggle: (state) => {
            state.isMenuToggle = !state.isMenuToggle;
        },
        closeMenu: (state)=>{
            state.isMenuToggle = false;
        }
    },
})

export const {MenuToggle, closeMenu} = SideSlice.actions;


export default SideSlice.reducer;