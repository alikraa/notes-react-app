import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import { findNote } from '../../ts/notes-actions.ts';
import { changeNote, removeNote } from '../../ts/server-requests.ts';
import './modal-form.scss';

export function ModalForm({ noteId, notes, setNotes, hidden, handleClick }) {
  const [currentNote, setCurrentNote] = useState({
    noteName: '',
    noteText: '',
  });

  useEffect(() => {
    if (noteId) {
      const note = findNote(noteId, notes);
      setCurrentNote(note);
    }
  }, [noteId, notes]);

  const updateNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedNote = {
      noteName: currentNote.noteName,
      noteText: currentNote.noteText,
    };

    setNotes((prev) =>
      prev.map((item) => {
        if (item.noteId === currentNote.noteId) {
          return {
            ...item,
            ...updatedNote,
          };
        }
        return item;
      })
    );

    changeNote(noteId, updatedNote);

    handleClick();
  };

  const deleteNote = () => {
    handleClick();
    setNotes((prev) =>
      prev.filter((item) => item.noteId !== currentNote.noteId)
    );

    removeNote(noteId);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    // <div className="wrapper" hidden={hidden} onClick={handleClick}>
    <div className="wrapper" hidden={hidden}>
      <div className="modal-form">
        <button
          type="button"
          className="modal-form__button close"
          aria-label="Close"
          onClick={handleClick}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        <form className="modal-form__form" onSubmit={updateNote}>
          <input
            type="text"
            className="form-input"
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
            className="form-textarea"
            name="text-field"
            value={currentNote?.noteText}
            onChange={(event) =>
              setCurrentNote((prev) => ({
                ...prev,
                noteText: event.target.value,
              }))
            }
          />
          <button type="submit" className="form-button">
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="modal-form__button delete"
          onClick={deleteNote}
        >
          Удалить заметку
        </button>
      </div>
    </div>
  );
}
