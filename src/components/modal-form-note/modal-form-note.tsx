/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { findNote } from '../../ts/notes-actions.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import {
  changeNote,
  removeNote,
} from '../../store/notes-slice-async-actions.ts';
import './modal-form-note.scss';

export function ModalFormNote({ handleClick }) {
  const dispatch = useAppDispatch();
  const { notes, currentNoteId } = useAppSelector(
    (state: RootState) => state.notesData
  );

  const [currentNote, setCurrentNote] = useState({
    noteId: '',
    colorName: '',
    noteName: '',
    noteText: '',
    noteDate: '',
    isFavorites: false,
    isEdit: false,
  });

  useEffect(() => {
    if (currentNoteId) {
      const note = findNote(currentNoteId, notes);
      setCurrentNote(note);
    }
  }, [currentNoteId, notes]);

  const updateNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedNote = {
      ...currentNote,
      noteName: currentNote.noteName,
      noteText: currentNote.noteText,
    };

    dispatch(changeNote({ currentNoteId, updatedNote }));

    handleClick();
  };

  const deleteNote = () => {
    handleClick();

    dispatch(removeNote(currentNoteId));
  };

  return (
    <>
      <form className="modal-form-note" onSubmit={updateNote}>
        <input
          type="text"
          className="input"
          name="input-field"
          value={currentNote?.noteName || ''}
          onChange={(event) =>
            setCurrentNote((prev) => ({
              ...prev,
              noteName: event.target.value,
            }))
          }
        />
        <textarea
          className="textarea"
          name="text-field"
          value={currentNote?.noteText}
          onChange={(event) =>
            setCurrentNote((prev) => ({
              ...prev,
              noteText: event.target.value,
            }))
          }
        />
        <button type="submit" className="button">
          Сохранить
        </button>
      </form>
      <button type="button" className="button delete" onClick={deleteNote}>
        Удалить заметку
      </button>
    </>
  );
}
