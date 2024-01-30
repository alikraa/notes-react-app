import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  addNewNote,
  fetchNotes,
  removeNote,
} from './notes-slice-async-actions.ts';

export interface Note {
  noteId: string;
  colorName: string;
  noteName: string;
  noteText: string;
  noteDate: string;
  isFavorites: boolean;
  isEdit: boolean;
}

interface InitialState {
  notes: Note[];
  currentNoteId: string;
  searchValue: string;
  status: string;
  error: null | unknown;
}

const initialState: InitialState = {
  notes: [],
  currentNoteId: '',
  searchValue: '',
  status: '',
  error: null,
};

const setError = (state: InitialState, action: PayloadAction<unknown>) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.unshift(action.payload);
    },

    deleteNote(state, action: PayloadAction<Note>) {
      state.notes = state.notes.filter(
        (item) => item.noteId !== action.payload.noteId
      );
    },

    updateNote(state, action: PayloadAction<Note>) {
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

    addFavorites(state, action: PayloadAction<Note>) {
      state.notes = state.notes.map((item) =>
        item.noteId === action.payload.noteId
          ? { ...item, isFavorites: action.payload.isFavorites }
          : item
      );
    },

    setCurrentNoteId(state, action: PayloadAction<string>) {
      state.currentNoteId = action.payload;
    },

    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchNotes.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<Note[]>) => {
        state.notes = action.payload;
        state.status = 'fulfilled';
        state.error = null;
      }
    );
    builder.addCase(fetchNotes.rejected, setError);
    builder.addCase(addNewNote.rejected, setError);
    builder.addCase(removeNote.rejected, setError);
  },
});

export const {
  addNote,
  deleteNote,
  updateNote,
  addFavorites,
  setCurrentNoteId,
  setSearchValue,
} = notesSlice.actions;

export default notesSlice.reducer;
