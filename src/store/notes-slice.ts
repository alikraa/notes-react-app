import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  status: string;
  error: null | unknown;
}

const initialState: InitialState = {
  notes: [],
  currentNoteId: '',
  status: '',
  error: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.unshift(action.payload);
    },

    deleteNote(state, action: PayloadAction<string>) {
      state.notes.filter((item) => item.noteId !== action.payload);
    },

    updateNote(state, action: PayloadAction<Note>) {
      const updatedNote = {
        noteName: action.payload.noteName,
        noteText: action.payload.noteText,
      };

      state.notes.map((item) =>
        item.noteId === action.payload.noteId
          ? { ...item, ...updatedNote }
          : item
      );
    },

    setCurrentNoteId(state, action: PayloadAction<string>) {
      state.currentNoteId = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote, setCurrentNoteId } =
  notesSlice.actions;

export default notesSlice.reducer;
