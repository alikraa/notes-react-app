import { NoteData } from './types.ts';

export const findNote = (id: string, notes: NoteData[]) =>
  notes.find((item) => item.id === id);
