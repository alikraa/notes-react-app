import React, { useEffect, useState } from 'react';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import { ModalWindow } from './components/modal-window/modal-window.tsx';
import { ModalFormNote } from './components/modal-form-note/modal-form-note.tsx';
import { Loader } from './components/loader/loader.tsx';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { RootState } from './store/store.ts';
import { addNewNote, fetchNotes } from './store/notes-slice-async-actions.ts';
import './style.scss';

function App() {
  const { status } = useAppSelector((state: RootState) => state.notesData);
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
      {status === 'loading' && <Loader />}
      <Header />
      <Sidebar handleClick={clickColor} />
      <NotesList handleClick={openModalForm} />
      <ModalWindow hidden={openForm} handleClick={openModalForm}>
        <ModalFormNote handleClick={openModalForm} />
      </ModalWindow>
    </div>
  );
}

export default App;
