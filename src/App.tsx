import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import { notesData } from './ts/notes-data.ts';
import './style.scss';

function App() {
  const [notes, setNotes] = useState(notesData);

  const addNote = (color: string) => {
    const newNote = {
      id: nanoid(),
      colorName: color,
      noteName: 'Без названия',
      noteText: 'Текст заметки',
      noteDate: 'Дата',
      isFavorites: true,
      isEdit: false,
    };

    setNotes((prev) => [newNote, ...prev]);
  };

  const clickColor = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    addNote(event.currentTarget.style.backgroundColor);
  };

  return (
    <div className="container">
      <Header />
      <Sidebar handleClick={clickColor} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
