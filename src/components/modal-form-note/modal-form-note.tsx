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
import { ModalWindowAction, NoteData } from '../../ts/types.ts';
import { noteTemplate } from '../../ts/notes-data.ts';
import './modal-form-note.scss';

export function ModalFormNote({ handleClick }: ModalWindowAction) {
  const dispatch = useAppDispatch();
  const { notes, currentNoteId } = useAppSelector(
    (state: RootState) => state.notesData
  );

  const [currentNote, setCurrentNote] = useState<NoteData>(noteTemplate);

  useEffect(() => {
    if (currentNoteId) {
      const note = findNote(currentNoteId, notes);
      const isNote = note ?? noteTemplate;
      setCurrentNote(isNote);
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
    <div className="modal-form-note">
      <form className="modal-form-note__form" onSubmit={updateNote}>
        <input
          type="text"
          className="modal-form-note__form__input"
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
          className="modal-form-note__form__textarea"
          name="text-field"
          value={currentNote?.noteText}
          onChange={(event) =>
            setCurrentNote((prev) => ({
              ...prev,
              noteText: event.target.value,
            }))
          }
        />
        <button type="submit" className="modal-form-note__form__button">
          Сохранить
        </button>
      </form>
      <button
        type="button"
        className="modal-form-note__form__button delete"
        onClick={deleteNote}
      >
        Удалить заметку
      </button>
    </div>
  );
}
