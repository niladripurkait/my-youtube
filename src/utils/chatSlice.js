import { createSlice } from "@reduxjs/toolkit";
import { CHAT_MESSAGE_LENGTH } from "../components/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length > 50) {
        state.message.shift(CHAT_MESSAGE_LENGTH);
      }
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
