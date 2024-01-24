import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './notes-slice.ts';

export const store = configureStore({
  reducer: {
    notesData: notesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
