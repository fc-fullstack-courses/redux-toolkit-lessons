import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'api';

const SLICE_NAME = 'auth';

const register = createAsyncThunk(
  `${SLICE_NAME}/register`,
  async (userData, thunkAPI) => {
    try {
      const {
        data: { data: user },
      } = await API.registerUser(userData);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { register };
export default authSlice.reducer;
