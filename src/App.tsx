import React, { useEffect, useState } from 'react';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import { ModalForm } from './components/modal-form/modal-form.tsx';
import { useAppDispatch } from './store/hooks.ts';
import { addNewNote, fetchNotes } from './store/notes-slice-async-actions.ts';
import './style.scss';

function App() {
  const dispatch = useAppDispatch();

  const [openForm, setOpenForm] = useState(true);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const clickColor = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(addNewNote(event.currentTarget.style.backgroundColor));
  };

  const openModalForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="container">
      <Header />
      <Sidebar handleClick={clickColor} />
      <NotesList handleClick={openModalForm} />
      <ModalForm hidden={openForm} handleClick={openModalForm} />
    </div>
  );
}

export default App;
