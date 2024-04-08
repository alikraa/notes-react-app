import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { FaStar, FaPen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { setCurrentNoteId } from '../../store/notes-slice.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { setFavorite } from '../../store/notes-slice-async-actions.ts';
import { NoteData } from '../../ts/types.ts';
import { getDate } from '../../ts/notes-actions.ts';
import './notes.scss';

interface NoteProps {
  note: NoteData;
  handleClick: () => void;
}

export function Note({ note, handleClick }: NoteProps) {
  const dispatch = useAppDispatch();
  const { id, colorName, noteName, noteText, isFavorites } = note;

  const starIconStyle = useMemo(
    () => ({ className: 'star-icon', size: '1.5em' }),
    []
  );
  const penIconStyle = useMemo(
    () => ({ className: 'star-icon', size: '1.5em' }),
    []
  );

  const date = getDate(note);

  const setNoteId = () => dispatch(setCurrentNoteId(id));

  const editClick = () => {
    setNoteId();

    handleClick();
  };

  const addToFavorite = () => {
    const updatedNote = {
      ...note,
      isFavorites: !isFavorites,
    };

    const currentNoteId = id;

    dispatch(setFavorite({ currentNoteId, updatedNote }));
  };

  return (
    <div className="notes-note" style={{ backgroundColor: colorName }}>
      <h3 className="notes-note__name">{noteName}</h3>
      {isFavorites ? (
        <button
          className="notes-note__favorite-button"
          type="button"
          aria-label="Favorite Notes"
          onClick={addToFavorite}
        >
          <IconContext.Provider value={starIconStyle}>
            <FaStar />
          </IconContext.Provider>
        </button>
      ) : (
        <button
          className="notes-note__favorite-button notes-note__favorite-button_visibility"
          type="button"
          aria-label="Favorite Notes"
          onClick={addToFavorite}
        >
          <IconContext.Provider value={starIconStyle}>
            <FaStar />
          </IconContext.Provider>
        </button>
      )}
      <Link
        to={`/notes/${id}`}
        style={{ textDecoration: 'none', color: '#000' }}
        onClick={setNoteId}
      >
        <div className="notes-note__text">{noteText}</div>
      </Link>
      <span className="notes-note__date">{date}</span>
      <button
        className="notes-note__edit-button"
        type="button"
        aria-label="Edit Note"
        onClick={editClick}
      >
        <IconContext.Provider value={penIconStyle}>
          <FaPen />
        </IconContext.Provider>
      </button>
    </div>
  );
}
