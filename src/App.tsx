import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import { ModalForm } from './components/modal-form/modal-form.tsx';
// import { notesData } from './ts/notes-data.ts';
import { getNotes, postNote } from './ts/server-requests.ts';
import './style.scss';

function App() {
  const [notes, setNotes] = useState([]);
  const [openForm, setOpenForm] = useState(true);

  const [noteId, setNoteId] = useState('');

  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

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

    postNote(newNote);
  };

  const clickColor = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    addNote(event.currentTarget.style.backgroundColor);
  };

  const openModalForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="container">
      <Header />
      <Sidebar handleClick={clickColor} />
      <NotesList
        notes={notes}
        handleClick={openModalForm}
        setNoteId={setNoteId}
      />
      <ModalForm
        id={noteId}
        notes={notes}
        setNotes={setNotes}
        hidden={openForm}
        handleClick={openModalForm}
      />
    </div>
  );
}

export default App;
