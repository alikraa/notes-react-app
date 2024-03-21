import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { Loader } from './components/loader/loader.tsx';
import { RootState } from './store/store.ts';
import { getUserName } from './ts/storage.ts';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { addNewNote, fetchNotes } from './store/notes-slice-async-actions.ts';
import { setNameOfUser } from './store/notes-slice.ts';
import './style.scss';

function App() {
  const { status } = useAppSelector((state: RootState) => state.notesData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  useEffect(() => {
    const name = getUserName();

    if (name) {
      dispatch(setNameOfUser(name));
    }
  });

  const clickColor = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(addNewNote(event.currentTarget.style.backgroundColor));
  };

  return (
    <div className="container">
      {status === 'loading' && <Loader />}
      <Header />
      <Sidebar handleClick={clickColor} />
      <Outlet />
    </div>
  );
}

export default App;
