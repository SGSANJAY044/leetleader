import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: {
    StudentID: number | null;
    Streak: number | null;
    SolvedEasy: number | null;
    SolvedMedium: number | null; 
    SolvedHard: number | null;
    Ranking: number | null;
    Name: string | null;
    ClassID: number | null;
    Roll: string | null;
    DepartmentID: number | null;
    Phone: string | null;
    Mail: string | null;
    Username: string | null;
  } | null;
}

const initialState: UserState = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
