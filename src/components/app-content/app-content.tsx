import { useState } from 'react';
import { NotesList } from '../notes/notes-list.tsx';
import { ModalWindow } from '../modal-window/modal-window.tsx';
import { ModalFormNote } from '../modal-form-note/modal-form-note.tsx';
import { SignIn } from '../sign-in/sign-in.tsx';
import { ModalFormName } from '../modal-form-name/modal-form-name.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';

export function AppContent() {
  const { userName } = useAppSelector(
    (state: RootState) => state.notesData
  );
  const [openForm, setOpenForm] = useState(true);

  const openModalForm = () => {
    setOpenForm(!openForm);
  };

  return userName ? (
    <>
      <NotesList handleClick={openModalForm} />
      <ModalWindow hidden={openForm} handleClick={openModalForm}>
        <ModalFormNote handleClick={openModalForm} />
      </ModalWindow>
    </>
  ) : (
    <>
      <SignIn handleClick={openModalForm} />
      <ModalWindow hidden={openForm} handleClick={openModalForm}>
        <ModalFormName handleClick={openModalForm} />
      </ModalWindow>
    </>
  );
}
