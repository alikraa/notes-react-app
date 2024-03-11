import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  addNewNote,
  changeNote,
  fetchNotes,
  removeNote,
  setFavorite,
} from './notes-slice-async-actions.ts';
import { NoteData } from '../ts/types.ts';

interface InitialState {
  userName: string;
  notes: NoteData[];
  favoriteNotes: NoteData[];
  isFavorite: boolean;
  currentNoteId: string;
  searchValue: string;
  status: string;
  error: null | unknown | string;
}

const initialState: InitialState = {
  userName: '',
  notes: [],
  favoriteNotes: [],
  isFavorite: false,
  currentNoteId: '',
  searchValue: '',
  status: '',
  error: null,
};

const setPending = (state: InitialState) => {
  state.status = 'loading';
  state.error = null;
};

const setSuccess = (state: InitialState) => {
  state.status = 'fulfilled';
  state.error = null;
};

const setError = (state: InitialState, action: PayloadAction<unknown>) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNameOfUser(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },

    addNote(state, action: PayloadAction<NoteData>) {
      state.notes.unshift(action.payload);
    },

    deleteNote(state, action: PayloadAction<NoteData>) {
      state.notes = state.notes.filter(
        (item) => item.noteId !== action.payload.noteId
      );
    },

    updateNote(state, action: PayloadAction<NoteData>) {
      const updatedNote = {
        noteName: action.payload.noteName,
        noteText: action.payload.noteText,
      };

      state.notes = state.notes.map((item) =>
        item.noteId === action.payload.noteId
          ? { ...item, ...updatedNote }
          : item
      );
    },

    addFavorites(state, action: PayloadAction<NoteData>) {
      state.notes = state.notes.map((item) =>
        item.noteId === action.payload.noteId
          ? { ...item, isFavorites: action.payload.isFavorites }
          : item
      );
    },

    getFavoriteNotes(state) {
      state.favoriteNotes = state.notes.filter((item) => item.isFavorites);
    },

    setCurrentNoteId(state, action: PayloadAction<string>) {
      state.currentNoteId = action.payload;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setIsFavorite(state) {
      state.isFavorite = !state.isFavorite;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchNotes.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<NoteData[]>) => {
        state.notes = action.payload;
        state.status = 'fulfilled';
        state.error = null;
      }
    );
    builder.addCase(fetchNotes.rejected, setError);

    builder.addCase(addNewNote.pending, setPending);
    builder.addCase(addNewNote.fulfilled, setSuccess);
    builder.addCase(addNewNote.rejected, setError);

    builder.addCase(removeNote.pending, setPending);
    builder.addCase(removeNote.fulfilled, setSuccess);
    builder.addCase(removeNote.rejected, setError);

    builder.addCase(changeNote.pending, setPending);
    builder.addCase(changeNote.fulfilled, setSuccess);
    builder.addCase(changeNote.rejected, setError);

    builder.addCase(setFavorite.rejected, setError);
  },
});

export const {
  setNameOfUser,
  addNote,
  deleteNote,
  updateNote,
  addFavorites,
  getFavoriteNotes,
  setCurrentNoteId,
  setSearchValue,
  setIsFavorite,
} = notesSlice.actions;

export default notesSlice.reducer;
