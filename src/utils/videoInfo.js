import { createSlice } from "@reduxjs/toolkit";

const videoInfo = createSlice({
  name: "videoDetails",
  initialState: {
    id: "",
    text: "",
  },
  reducers: {
    addVideoId: (state, action) => {
      state.id = action.payload;
    },
    searchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addVideoId, searchText } = videoInfo.actions;
export default videoInfo.reducer;
