import { NoteData } from './types.ts';

export const findNote = (id: string, notes: NoteData[]) =>
  notes.find((item) => item.id === id);

export const getDate = (note: NoteData) =>
  `${new Date(note.noteDate).toLocaleTimeString().slice(0, 5)}, ${new Date(
    note.noteDate
  ).toLocaleDateString()}`;
