import { IconContext } from 'react-icons';
import { FaStar, FaPen } from 'react-icons/fa6';
import { useAppDispatch } from '../../store/hooks.ts';
import { setCurrentNoteId } from '../../store/notes-slice.ts';
import { setFavorite } from '../../store/notes-slice-async-actions.ts';
import { NoteData } from '../../ts/types.ts';
import './notes.scss';

interface NoteProps {
  note: NoteData;
  handleClick: () => void;
}

export function Note({ note, handleClick }: NoteProps) {
  const dispatch = useAppDispatch();
  const { id, colorName, noteName, noteText, noteDate, isFavorites, isEdit } =
    note;

  const date = `${new Date(noteDate)
    .toLocaleTimeString()
    .slice(0, 5)}, ${new Date(noteDate).toLocaleDateString()}`;

  const editClick = () => {
    dispatch(setCurrentNoteId(id));

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
    <div className="note" style={{ backgroundColor: colorName }}>
      <h3 className="note-name">{noteName}</h3>
      {isFavorites ? (
        <button
          className="button-favorite"
          type="button"
          aria-label="Favorite Notes"
          onClick={addToFavorite}
        >
          <IconContext.Provider
            value={{ className: 'star-icon', size: '1.5em' }}
          >
            <FaStar />
          </IconContext.Provider>
        </button>
      ) : (
        <button
          className="button-favorite visibility"
          type="button"
          aria-label="Favorite Notes"
          onClick={addToFavorite}
        >
          <IconContext.Provider
            value={{ className: 'star-icon', size: '1.5em' }}
          >
            <FaStar />
          </IconContext.Provider>
        </button>
      )}
      <div className="note-text">{noteText}</div>
      <span className="note-date">{date}</span>
      <button
        className="edit-note"
        type="button"
        aria-label="Edit Note"
        onClick={editClick}
      >
        <IconContext.Provider value={{ className: 'pen-icon', size: '1.2em' }}>
          <FaPen />
        </IconContext.Provider>
      </button>
    </div>
  );
}
