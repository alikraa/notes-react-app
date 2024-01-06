import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import { findNote } from '../../ts/notes-actions.ts';
import './modal-form.scss';

export function ModalForm({ id, notes, setNotes, hidden, handleClick }) {
  const [currentNote, setCurrentNote] = useState({
    noteName: '',
    noteText: '',
  });

  useEffect(() => {
    if (id) {
      const note = findNote(id, notes);
      setCurrentNote(note);
    }
  }, [id, notes]);

  const updateNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNotes((prev) =>
      prev.map((item) => {
        if (item.id === currentNote.id) {
          return {
            ...item,
            noteName: currentNote.noteName,
            noteText: currentNote.noteText,
          };
        }
        return item;
      })
    );

    handleClick();
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((item) => item.id !== currentNote.id));
    handleClick();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="wrapper" hidden={hidden} onClick={handleClick}>
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
