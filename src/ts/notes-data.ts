import { nanoid } from 'nanoid';

export const notesData = [
  {
    id: nanoid(),
    colorName: '#F8A09F',
    noteName: 'Name',
    noteText: 'Text',
    noteDate: 'Дата',
    isFavorites: true,
    isEdit: false,
  },
  {
    id: nanoid(),
    colorName: '#8158B7',
    noteName: 'Без названия',
    noteText: 'Текст заметки',
    noteDate: 'Дата',
    isFavorites: true,
    isEdit: false,
  },
  {
    id: nanoid(),
    colorName: '#F57F49',
    noteName: 'Без названия',
    noteText: 'Текст заметки',
    noteDate: 'Дата',
    isFavorites: true,
    isEdit: false,
  },
  {
    id: nanoid(),
    colorName: '#BED636',
    noteName: 'Без названия',
    noteText: 'Текст заметки',
    noteDate: 'Дата',
    isFavorites: true,
    isEdit: false,
  },
  {
    id: nanoid(),
    colorName: '#5BC8AF',
    noteName: 'Без названия',
    noteText: 'Текст заметки',
    noteDate: 'Дата',
    isFavorites: true,
    isEdit: false,
  },
];

export const colors = [
  { id: 1, name: '#F8A09F' },
  { id: 2, name: '#8158B7' },
  { id: 3, name: '#F57F49' },
  { id: 4, name: '#BED636' },
  { id: 5, name: '#5BC8AF' },
];

export const noteTemplate = {
  id: '',
  noteId: '',
  colorName: '',
  noteName: '',
  noteText: '',
  noteDate: new Date(),
  isFavorites: false,
  isEdit: false,
};

export const templateName = 'Без названия';
export const templateText = 'Текст заметки';

export const loading = 'loading';
export const fulfilled = 'fulfilled';
export const rejected = 'rejected';
