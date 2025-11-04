import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState:{
        allVideos: [],
        filteredVideos: [],
    },
    reducers:{
        setVideos: (state, action)=>{
            state.allVideos = action.payload;
            state.filteredVideos = action.payload;
        },

        filterVideos: (state, action)=>{
            state.filteredVideos = state.allVideos.filter(video=> video.snippet.title.toLowerCase().includes(action.payload.toLowerCase()));
    },
},
});

export const {setVideos, filterVideos} = videoSlice.actions;

export default videoSlice.reducer;