import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaPen } from 'react-icons/fa6';
import { MdKeyboardBackspace } from 'react-icons/md';
import { ModalWindow } from '../modal-window/modal-window.tsx';
import { ModalFormNote } from '../modal-form-note/modal-form-note.tsx';
import { noteTemplate } from '../../ts/notes-data.ts';
import { findNote, getDate, saveNote } from '../../ts/notes-actions.ts';
import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import './notes.scss';

export function NoteDetails() {
  const { notes, currentNoteId } = useAppSelector(
    (state: RootState) => state.notesData
  );
  const navigate = useNavigate();

  const [note, setNote] = useState(noteTemplate);
  const [openForm, setOpenForm] = useState(true);

  const arrowIconStyle = useMemo(
    () => ({ className: 'arrow-icon', size: '3em' }),
    []
  );
  const pencilIconStyle = useMemo(
    () => ({ className: 'pencil-icon', size: '1.7em' }),
    []
  );

  useEffect(() => {
    if (currentNoteId) {
      saveNote(currentNoteId, notes, setNote)
    }
  }, [currentNoteId, notes]);

  useEffect(() => {
    const currentNote = findNote(currentNoteId, notes);
    if (currentNote === undefined) {
      navigate('/');
    }
  }, [currentNoteId, navigate, notes]);

  const date = getDate(note);

  const openModalForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="notes-note-details">
      <div className="notes-note-details__actions">
        <button
          type="button"
          aria-label="Back"
          className="notes-note-details__back-button"
          onClick={() => navigate(-1)}
        >
          <IconContext.Provider value={arrowIconStyle}>
            <MdKeyboardBackspace />
          </IconContext.Provider>
        </button>

        <button
          className="notes-note-details__edit-button"
          type="button"
          aria-label="Edit Note"
          onClick={openModalForm}
        >
          <IconContext.Provider value={pencilIconStyle}>
            <FaPen />
          </IconContext.Provider>
        </button>
      </div>

      <div className="notes-note-details__note">
        <h2 className="notes-note-details__note__name">{note.noteName}</h2>
        <p className="notes-note-details__note__date">{date}</p>
        <div className="notes-note-details__note__text">{note.noteText}</div>
      </div>

      <ModalWindow hidden={openForm} handleClick={openModalForm}>
        <ModalFormNote handleClick={openModalForm} />
      </ModalWindow>
    </div>
  );
}
