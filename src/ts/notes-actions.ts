import { noteTemplate } from './notes-data.ts';
import { NoteData } from './types.ts';

export const findNote = (id: string, notes: NoteData[]) =>
  notes.find((item) => item.id === id);

export const getDate = (note: NoteData) =>
  `${new Date(note.noteDate).toLocaleTimeString().slice(0, 5)}, ${new Date(
    note.noteDate
  ).toLocaleDateString()}`;

export const saveNote = (
  id: string,
  notes: NoteData[],
  setNote: (note: NoteData) => void
) => {
  const currentNote = findNote(id, notes);
  const isNote = currentNote ?? noteTemplate;
  setNote(isNote);
};

export const sortingByDate = (list: NoteData[]) =>
  list.sort(
    (a, b) => new Date(b.noteDate).getTime() - new Date(a.noteDate).getTime()
  );
