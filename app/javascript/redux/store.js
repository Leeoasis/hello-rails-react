import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messagesSlice';

const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});

export default store;