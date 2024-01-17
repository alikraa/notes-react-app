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

  const [currentNoteId, setCurrentNoteId] = useState('');

  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

  const addNote = async (color: string) => {
    const newNote = {
      noteId: nanoid(),
      colorName: color,
      noteName: 'Без названия',
      noteText: 'Текст заметки',
      noteDate: 'Дата',
      isFavorites: true,
      isEdit: false,
    };

    await postNote(newNote);

    await getNotes().then((data) => setNotes(data));
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
        setCurrentNoteId={setCurrentNoteId}
      />
      <ModalForm
        noteId={currentNoteId}
        notes={notes}
        setNotes={setNotes}
        hidden={openForm}
        handleClick={openModalForm}
      />
    </div>
  );
}

export default App;
