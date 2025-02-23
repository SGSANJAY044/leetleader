import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  auth: boolean | null;  // adjust the type based on your auth data structure
}

const initialState: authState = { auth: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<authState['auth']>) => {
      state.auth = action.payload;
    },
    clearAuth: (state) => {
      state.auth = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
