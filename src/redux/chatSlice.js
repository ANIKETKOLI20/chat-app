import { createSlice } from '@reduxjs/toolkit';

// Initial state with mock user and empty messages
const initialState = {
  messages: [],
  currentUser: 'User1',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        user: state.currentUser,
        text: action.payload,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        user: 'Bot',
        text: action.payload,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;

// Simulate receiving a message after a delay
export const simulateMessageReception = (dispatch) => {
  setTimeout(() => {
    dispatch(receiveMessage('This is a mock message from Bot!'));
  }, 2000);
};
