import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/messages/random';

const initialState = {
  message: '',
  isLoading: true,
  error: '',
};

export const getMessage = createAsyncThunk(
  'message/getMessage',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      console.log(resp)
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
     displayGreeting: (state, action) => ({
       ...state,
       message: action.payload,  
     })
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getMessage.fulfilled, (state, action) => ({
        ...state,
        message: action.payload.content,
        isLoading: false,
      }))
      .addCase(getMessage.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }));
  },
});

export const {
   displayGreeting
} = messagesSlice.actions;

export default messagesSlice.reducer;