import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {
  addFavorites,
  addNote,
  deleteNote,
  updateNote,
} from './notes-slice.ts';
import { NoteData } from '../ts/types.ts';
import { templateName, templateText } from '../ts/notes-data.ts';

interface Data {
  currentNoteId: string;
  updatedNote: NoteData;
}

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://6599ace3652b843dea530f0b.mockapi.io/notes'
      );

      return response.data.reverse();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const addNewNote = createAsyncThunk(
  'notes/addNewNote',
  async (color: string, { rejectWithValue, dispatch }) => {
    try {
      const newNote: NoteData = {
        id: '',
        noteId: nanoid(),
        colorName: color,
        noteName: templateName,
        noteText: templateText,
        noteDate: new Date(),
        isFavorites: false,
        isEdit: false,
      };

      const response = await axios.post(
        'https://6599ace3652b843dea530f0b.mockapi.io/notes',
        newNote
      );

      dispatch(addNote(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const removeNote = createAsyncThunk(
  'notes/removeNote',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(
        `https://6599ace3652b843dea530f0b.mockapi.io/notes/${id}`
      );

      dispatch(deleteNote(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const changeNote = createAsyncThunk(
  'notes/changeNote',
  async (data: Data, { rejectWithValue, dispatch }) => {
    try {
      const { currentNoteId, updatedNote } = data;
      const response = await axios.put(
        `https://6599ace3652b843dea530f0b.mockapi.io/notes/${currentNoteId}`,
        updatedNote
      );

      dispatch(updateNote(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const setFavorite = createAsyncThunk(
  'notes/setFavorite',
  async (data: Data, { rejectWithValue, dispatch }) => {
    try {
      const { currentNoteId, updatedNote } = data;
      const response = await axios.put(
        `https://6599ace3652b843dea530f0b.mockapi.io/notes/${currentNoteId}`,
        updatedNote
      );

      dispatch(addFavorites(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
